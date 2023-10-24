const JSONCrushSwap = (string, forward = 1) => {
  // swap out characters for lesser used ones that wont get escaped
  const swapGroups = [
    ['"', "'"],
    ["':", "!"],
    [",'", "~"],
    ["}", ")", "\\", "\\"],
    ["{", "(", "\\", "\\"],
  ];

  const swapInternal = (string, g) => {
    let regex = new RegExp(
      `${(g[2] ? g[2] : "") + g[0]}|${(g[3] ? g[3] : "") + g[1]}`,
      "g"
    );
    return string.replace(regex, ($1) => ($1 === g[0] ? g[1] : g[0]));
  };

  // need to be able to swap characters in reverse direction for uncrush
  if (forward)
    for (let i = 0; i < swapGroups.length; ++i)
      string = swapInternal(string, swapGroups[i]);
  else
    for (let i = swapGroups.length; i--; )
      string = swapInternal(string, swapGroups[i]);

  return string;
};
function crush(jsonObject, maxSubstringLength = 50) {
  const replacements = {
    indikator_group: "a",
    indikator_name: "b",
    indikator_category: "c",
    karta_Tidsperiod: "1a",
    karta_Kön: "1b",
    karta_Åldersgrupp: "1c",
    stapel_Område: "2a",
    stapel_Tidsperiod: "2b",
    stapel_Kön: "2c",
    linje_Område: "3a",
    linje_Kön: "3b",
    linje_Åldersgrupp: "3c",
    table_Tidsperiod: "4a",
    table_Område: "4b",
    tabel_Åldersgrupp: "4c",
    tabel_Kön: "4d",
    page: "d",
  };
  const jsonObjectReplacedArray = Object.keys(jsonObject).map((key) => {
    const newKey = replacements[key] || key;
    return { [newKey]: jsonObject[key] };
  });
  const josnObjectReplaced = jsonObjectReplacedArray.reduce((a, b) =>
    Object.assign({}, a, b)
  );
  string = JSON.stringify(josnObjectReplaced);
  const delimiter = "\u0001"; // used to split parts of crushed string
  const JSCrush = (string, replaceCharacters) => {
    // JSCrush Algorithm (repleace repeated substrings with single characters)
    let replaceCharacterPos = replaceCharacters.length;
    let splitString = "";

    const ByteLength = (string) =>
      encodeURI(encodeURIComponent(string)).replace(/%../g, "i").length;
    const HasUnmatchedSurrogate = (string) => {
      // check ends of string for unmatched surrogate pairs
      let c1 = string.charCodeAt(0);
      let c2 = string.charCodeAt(string.length - 1);
      return (c1 >= 0xdc00 && c1 <= 0xdfff) || (c2 >= 0xd800 && c2 <= 0xdbff);
    };

    // count instances of substrings
    let substringCount = {};
    for (
      let substringLength = 2;
      substringLength < maxSubstringLength;
      substringLength++
    )
      for (let i = 0; i < string.length - substringLength; ++i) {
        let substring = string.substr(i, substringLength);

        // don't recount if already in list
        if (substringCount[substring]) continue;

        // prevent breaking up unmatched surrogates
        if (HasUnmatchedSurrogate(substring)) continue;

        // count how many times the substring appears
        let count = 1;
        for (
          let substringPos = string.indexOf(substring, i + substringLength);
          substringPos >= 0;
          ++count
        )
          substringPos = string.indexOf(
            substring,
            substringPos + substringLength
          );

        // add to list if it appears multiple times
        if (count > 1) substringCount[substring] = count;
      }

    while (true) {
      // loop while string can be crushed more
      // get the next character that is not in the string
      for (
        ;
        replaceCharacterPos-- &&
        string.includes(replaceCharacters[replaceCharacterPos]);

      ) {}
      if (replaceCharacterPos < 0) break; // ran out of replacement characters
      let replaceCharacter = replaceCharacters[replaceCharacterPos];

      // find the longest substring to replace
      let bestSubstring;
      let bestLengthDelta = 0;
      let replaceByteLength = ByteLength(replaceCharacter);
      for (let substring in substringCount) {
        // calculate change in length of string if it substring was replaced
        let count = substringCount[substring];
        let lengthDelta =
          (count - 1) * ByteLength(substring) - (count + 1) * replaceByteLength;
        if (!splitString.length) lengthDelta -= ByteLength(delimiter); // include the delimiter length
        if (lengthDelta <= 0) delete substringCount[substring];
        else if (lengthDelta > bestLengthDelta) {
          bestSubstring = substring;
          bestLengthDelta = lengthDelta;
        }
      }
      if (!bestSubstring) break; // string can't be compressed further

      // create new string with the split character
      string =
        string.split(bestSubstring).join(replaceCharacter) +
        replaceCharacter +
        bestSubstring;
      splitString = replaceCharacter + splitString;

      // update substring count list after the replacement
      let newSubstringCount = {};
      for (let substring in substringCount) {
        // make a new substring with the replacement
        let newSubstring = substring
          .split(bestSubstring)
          .join(replaceCharacter);

        // count how many times the new substring appears
        let count = 0;
        for (let i = string.indexOf(newSubstring); i >= 0; ++count)
          i = string.indexOf(newSubstring, i + newSubstring.length);

        // add to list if it appears multiple times
        if (count > 1) newSubstringCount[newSubstring] = count;
      }
      substringCount = newSubstringCount;
    }

    return { a: string, b: splitString };
  };

  // create a string of replacement characters
  let characters = [];

  // prefer replacing with characters that will not be escaped by encodeURIComponent
  const unescapedCharacters = `-_.!~*'()`;
  for (let i = 127; --i; ) {
    if (
      (i >= 48 && i <= 57) || // 0-9
      (i >= 65 && i <= 90) || // A-Z
      (i >= 97 && i <= 122) || // a-z
      unescapedCharacters.includes(String.fromCharCode(i))
    )
      characters.push(String.fromCharCode(i));
  }

  // pick from extended set last
  for (let i = 32; i < 255; ++i) {
    let c = String.fromCharCode(i);
    if (c != "\\" && !characters.includes(c)) characters.unshift(c);
  }

  // remove delimiter if it is found in the string
  string = string.replace(new RegExp(delimiter, "g"), "");

  // swap out common json characters
  string = JSONCrushSwap(string);

  // crush with JS crush
  const crushed = JSCrush(string, characters);

  // insert delimiter between JSCrush parts
  let crushedString = crushed.a;
  if (crushed.b.length) crushedString += delimiter + crushed.b;

  // fix issues with some links not being recognized properly
  crushedString += "_";

  // return crushed string
  return crushedString;
}

function uncrush(string) {
  // remove last character
  string = string.substring(0, string.length - 1);

  // unsplit the string using the delimiter
  const stringParts = string.split("\u0001");

  // JSUncrush algorithm
  let uncrushedString = stringParts[0];
  if (stringParts.length > 1) {
    let splitString = stringParts[1];
    for (let character of splitString) {
      // split the string using the current splitCharacter
      let splitArray = uncrushedString.split(character);

      // rejoin the string with the last element from the split
      uncrushedString = splitArray.join(splitArray.pop());
    }
  }

  // unswap the json characters in reverse direction
  const unreplacedString = JSONCrushSwap(uncrushedString, 0);
  const unreplacedJson = JSON.parse(unreplacedString);
  const replacements = {
    a: "indikator_group",
    b: "indikator_name",
    c: "indikator_category",
    "1a": "karta_Tidsperiod",
    "1b": "karta_Kön",
    "1c": "karta_Åldersgrupp",
    "2a": "stapel_Område",
    "2b": "stapel_Tidsperiod",
    "2c": "stapel_Kön",
    "3a": "linje_Område",
    "3b": "linje_Kön",
    "3c": "linje_Åldersgrupp",
    "4a": "table_Tidsperiod",
    "4b": "table_Område",
    "4c": "tabel_Åldersgrupp",
    "4d": "tabel_Kön",
    d: "page",
  };
  const jsonObjectReplacedArray = Object.keys(unreplacedJson).map((key) => {
    const newKey = replacements[key] || key;
    return { [newKey]: unreplacedJson[key] };
  });
  const replacedJson = jsonObjectReplacedArray.reduce((a, b) =>
    Object.assign({}, a, b)
  );
  return replacedJson;
}

function update(target, src) {
  const res = {};
  Object.keys(target).forEach(
    (k) => (res[k] = src.hasOwnProperty(k) ? src[k] : target[k])
  );
  return res;
}
function copyUrl() {
  let copyText = document.getElementById("inputUrl");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  let copyButton = document.getElementById("copyButton");
  copyButton.style.backgroundColor = "#5cb85c";
  copyButton.innerHTML = `<div><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg> Kopierad till urklipp</div>`;
}
document.addEventListener("DOMContentLoaded", function (event) {
  //Disable animation and set the background of loading page to transparent
  const styles = `
    .sas_ReportContainer-internal-SlideTransition_container {
        animation-duration: 0s !important;
    }
    .sas_components-Select-Select_label{
        font-size: 16px !important;
    }
    .sas_components-Pane-Pane_pane {
        --pane-bg: transparent !important;
    }
    .sas_ReportContainer-BreadcrumbHack_hack{
        display: none;
    }
    .tab_icon:hover{
        background-color: #e9ecef !important;
        border: 1px solid #e9ecef !important;
        -webkit-transition: background-color 100ms linear !important;
        -ms-transition: background-color 100ms linear !important;
        transition: background-color 100ms linear !important;
        
    }
    .tool_icon{
        opacity:0.8 !important;
    }
    .tool_icon:hover{
        opacity: 1.0 !important;
        border: 1px solid #f5f3f0 !important;
    }
    .lds-ring {
            display: block;
            width: 80px;
            height: 80px;
            margin: auto;
        }

        .lds-ring div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid #612361;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #612361 transparent transparent transparent;
        }

        .lds-ring div:nth-child(1) {
            animation-delay: -0.45s;
        }

        .lds-ring div:nth-child(2) {
            animation-delay: -0.3s;
        }

        .lds-ring div:nth-child(3) {
            animation-delay: -0.15s;
        }

        @keyframes lds-ring {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .fade-in {
            opacity: 1;
            animation-name: fadeInOpacity;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
        }

        @keyframes fadeInOpacity {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .first-line {
            font-size: 2.0rem;
            font-family: Arial, Helvetica, sans-serif;
            position: absolute;
            opacity: 0;
            width: 100%;
            text-align: center;
            margin-top: 50px;
        }

        .loading-text{
            text-align: center;
            display: block;
            margin: auto;
            font-size: 2rem;
            font-family:Arial, Helvetica, sans-serif;
        }

        .loading-tip {
            display: block;
            margin: 60px auto auto auto;
        }
        .sas_components-Popper-Popper_popper-pane{
            height: 250px ! important;
        }
        .sas_components-Popper-Popper_popper-pane > div > div{
            height: 240px ! important;
        }
        .ErrorMessageTitle{
            text-align: left;
            display: flex;
            margin: auto;
            font-size: 4rem;
            font-family:Arial, Helvetica, sans-serif;
            font-weight: bold;
        }
        .ErrorMessageMain{
            text-align: left;
            display: flex;
            margin: 10px;
            font-size: 2rem;
            font-family:Arial, Helvetica, sans-serif;
        }
        .indent{
            padding-left: 4rem;
        }
        .biggerSpace{
            padding-top: 2rem;
        }
        .thirdPartyErrorDiv{
            height: 790px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #customErrorDiv{
            width: 80%;
        }
        
        /* Following CSS controls the style of 'mer-information' pop-up window*/ 

        .sas_components-Heading-Heading_text{
            font-size: 1.4rem ! important;
        }
        .sas_components-SVG-SVG_svg.sas_components-SVG-SVG_icon.sas_components-Icon-Icon_icon.sas_components-Button-__internal__-BaseButton_icon-inner{
            width: 28px ! important;
            height: 28px ! important;
        }
        .sas_components-Dialog-Dialog_dialog-button.sas_components-Button-__internal__-BaseButton_button{
            width: 70px ! important;
            height: 25px ! important;
        }
        .sas_components-Button-__internal__-BaseButton_text{
            font-size: 1.2rem ! important;
        } 

        .sas_components-ListBox-List_item-text{
            font-size: 1.6rem ! important;
            font-family: Arial, Helvetica, sans-serif ! important;
        }

        .sasTipTable > tbody > tr > td{
            border: none ! important;
        }
        .sas_components-ReportContainer-BreadcrumbHack_hack{
            display: none ! important;
        }
        .sas_components-ObjectToolbar-ObjectToolbar_wrapper{
            display: none ! important;
        }

        `;
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  iframe = document.createElement("iframe");
  iframe.src =
    "https://rawcdn.githack.com/youbao88/folkhalsokollen_static_files/cb60ff854ce087e4b99d71e2bb63dc3d920742e8/3rdpartycookiecheckstart.html";
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  var receiveMessage = function (evt) {
    if (evt.data === "MM:3PCunsupported") {
      console.log("third party cookies are not supported");
      let sasReport = document.getElementsByTagName("sas-report")[0];
      let thirdPartyErrorDiv = sasReport.appendChild(
        document.createElement("div")
      );
      thirdPartyErrorDiv.setAttribute("id", "thirdPartyErrorDiv");
      thirdPartyErrorDiv.style.cssText = `
            height: 790px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 80%;
            `;
      let wrapDiv = thirdPartyErrorDiv.appendChild(
        document.createElement("div")
      );
      wrapDiv.innerHTML = `
                    <div class = 'ErrorMessageTitle'>
                <img src="https://img.icons8.com/emoji/50/null/warning-emoji.png"/ style = "margin: 5px"><span style = 'margin-top: auto; margin-bottom: auto'>Fel: Tredjepartscookies är blockerade</span>
                </div>
                <div class = 'ErrorMessageMain'>
                <span>Det har uppstått ett fel mellan Folkhälsokollen och webbläsaren. Du kan behöva tillåta cookies från tredje part för att åtgärda problemet. Prova något av följande alternativ:</span>
                </div>
                <div class = 'ErrorMessageMain indent'>
                <span>1. Ladda om sidan</span>
                </div>
                <div class = 'ErrorMessageMain indent'>
                <span>2. Cookies är blockerade, läs mer&nbsp;</span><a href = "https://www.folkhalsokollen.se/hantera-kakor" target="_blank">Hantera kakor i din webbläsare</a>
                </div>
                <div class = 'ErrorMessageMain indent biggerSpace'>
                    <span>Kontakta <a href = "mailto: folkhalsokollen.slso@regionstockholm.se">folkhalsokollen.slso@regionstockholm.se</a> om felet kvarstår.</span>
                </div>
                `;
    } else if (evt.data === "MM:3PCsupported") {
      console.log("third party cookies are supported");

      var base64ScriptJs = document.createElement("script");
      base64ScriptJs.src =
        "https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.min.js";
      document.head.append(base64ScriptJs);

      var popupScriptJs = document.createElement("script");
      popupScriptJs.src =
        "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.all.min.js";
      document.head.append(popupScriptJs);

      var popupScriptCss = document.createElement("link");
      popupScriptCss.href =
        "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css";
      popupScriptCss.rel = "stylesheet";
      document.head.append(popupScriptCss);

      var sasVaSDKScript = document.createElement("script");
      sasVaSDKScript.type = "text/javascript";
      sasVaSDKScript.src =
        "https://cdn.jsdelivr.net/npm/@sassoftware/va-report-components@1.12.0/dist/umd/va-report-components.min.js";
      document.head.append(sasVaSDKScript);
      //add modals to the html content
    }
  };
  window.addEventListener("message", receiveMessage, false, {
    once: true,
  });

  function disableScrollDoubleClickOutline() {
    let canvases = Array.from(document.getElementsByTagName("canvas"));
    for (let i = 0; i < canvases.length; i++) {
      //Stop double click function
      canvases[i].addEventListener(
        "dblclick",
        function (event) {
          event.stopPropagation();
        },
        true
      );
      //Disable the outline
      canvases[i].style.outline = "none";
      //Stop wheel function
      canvases[i].addEventListener(
        "wheel",
        function (event) {
          event.stopPropagation();
        },
        true
      );
    }

    //Disable the outline for selection boxes
    let selectionBoxes = document.getElementsByClassName(
      "sas_components-Select-Select_select sas_components-Select-Select_focus-visible"
    );
    if (selectionBoxes.length != 0) {
      for (let i = 0; i < selectionBoxes.length; i++) {
        selectionBoxes[i].style.outline = "none";
      }
    }
    //Disable the outline for text link
    let textLink = document.getElementsByClassName(
      "sas_BirdText-BirdText_bird-text-link"
    );
    if (textLink.length != 0) {
      for (let i = 0; i < textLink.length; i++) {
        textLink[i].style.outline = "none";
      }
    }
    //Disable the outline for bird text
    let birdText = document.getElementsByClassName(
      "sas_BirdText-BirdText_text"
    );
    if (birdText.length != 0) {
      for (let i = 0; i < birdText.length; i++) {
        birdText[i].style.outline = "none";
      }
    }
    //Add hover effect to the icons
    let icons = document.getElementsByClassName(
      "sas_components-Image-Image_clickable sas_components-Image-Image_scale sas_components-Image-Image_span"
    );
    for (let i = 0; i < icons.length; i++) {
      if (
        icons[i].title == "Hjälp" ||
        icons[i].title ==
          "Klicka här för att spara en bild av din visualisering. Bilden laddas ned som en jpg-fil på din dator." ||
        icons[i].title == "Klicka här för att spara en Excel fil." ||
        icons[i].title ==
          "Använd den här länken för att dela sidan med de data du har valt."
      ) {
        icons[i].parentNode.parentNode.parentNode.classList.add("tool_icon");
      } else {
        let icon_div = icons[i].parentNode.parentNode.parentNode.parentNode;
        if (icon_div.style.backgroundColor != "rgb(233, 236, 239)") {
          icon_div.classList.add("tab_icon");
        }
      }
    }
  }
  window.addEventListener("vaReportComponents.loaded", function () {
    let shareParameters;
    let sasReport = document.getElementById("my-report");
    let stapelCurrentOmrade = "Stockholms län";
    let defaultOmradeWhenIndicatorChanged = {};
    let page_to_open;

    observer_change_indicator = new MutationObserver((mutationRecords) => {
      sasReport.getReportHandle().then((reportHandle) => {
        let newIndicator = document
          .querySelector('[aria-controls="sas_RC-Dropdown-list-1"]')
          .getElementsByClassName(
            "sas_components-Select-Select_label"
          )[0].innerText;
        let _parameters = indicator_name_parameter_map[newIndicator];
        let parameters = {};
        for (let i in _parameters) {
          Object.assign(parameters, _parameters[i]);
        }
        Object.assign(parameters, defaultOmradeWhenIndicatorChanged);
        shareParameters = update(shareParameters, parameters);
        reportHandle.updateReportParameters(parameters);
      });
    });

    let loading_replaced = false;
    let observer_loading = new MutationObserver((mutationRecords) => {
      let sasLoadingDiv = document.getElementsByClassName(
        "sas_components-BusyStateIndicator-BusyStateIndicator_state"
      );
      if (typeof sasLoadingDiv != "undefined" && loading_replaced == false) {
        loading_replaced = true;
        sasLoadingDiv[0].style.visibility = "hidden";
        let sasMainPanel = document.getElementsByClassName(
          "sas_components-Pane-Pane_pane"
        )[0];
        let customLoadingDiv = sasMainPanel.appendChild(
          document.createElement("div")
        );
        customLoadingDiv.setAttribute("id", "customLoadingDiv");
        customLoadingDiv.innerHTML = `
                <div class='loading screen'>
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class='loading-text'>webbverktyget laddas...</div>
                    <div class='loading-tip'>
                        <p class="first-line fade-in">Använd webbverktyget från en dator eller surfplatta. För att garantera att det visas på bästa sätt rekommenderar vi webbläsarna Microsoft Edge (alla versioner), Firefox 12, Google chrome 19, Internet explorer 10, Safari 5.1 eller senare versioner av dessa.</p>
                    </div>
                </div>
            `;
      }
      let errorMessageDiv = document.querySelector(
        '[title^="Unable to"], [title^="Det går inte"]'
      );
      if (errorMessageDiv != null) {
        errorMessageDiv.style.display = "none";
        let sasMainPanel = document.getElementsByClassName(
          "sas_components-Pane-Pane_pane"
        )[0];
        let customErrorDiv = sasMainPanel.appendChild(
          document.createElement("div")
        );
        customErrorDiv.setAttribute("id", "customErrorDiv");
        customErrorDiv.innerHTML = `
             <div class = 'ErrorMessageTitle'>
                <img src="https://img.icons8.com/emoji/50/null/warning-emoji.png"/ style = "margin: 5px"><span style = 'margin-top: auto; margin-bottom: auto'>Fel: Verktyget kunde inte läsas in</span>
                </div>
                <div class = 'ErrorMessageMain'>
                <span>Det har uppstått ett fel mellan Folkhälsokollen och webbläsaren. Du kan försöka åtgärda problemet genom att göra något av följande:</span>
                </div>
                <div class = 'ErrorMessageMain indent'>
                <span>1. Om underhåll pågår: vänta en stund och försök igen senare.</span>
                </div>
                </div>
                <div class = 'ErrorMessageMain indent'>
                <span>2. Prova att öppna Folkhälsokollen i en annan webbläsare.</span>
                </div>
                <div class = 'ErrorMessageMain indent biggerSpace'>
                    <span>Kontakta <a href = "mailto: folkhalsokollen.slso@regionstockholm.se" style = "color: #27769f;">folkhalsokollen.slso@regionstockholm.se</a> om felet kvarstår.</span>
                </div> 
                `;
        observer_loading.disconnect();
      }

      let indicator_control = document.querySelector(
        '[aria-controls="sas_RC-Dropdown-list-1"]'
      );
      if (indicator_control) {
        observer_change_indicator.observe(
          indicator_control.getElementsByClassName(
            "sas_components-Select-Select_label"
          )[0],
          {
            characterData: true,
            attributes: false,
            childList: false,
            subtree: true,
          }
        );
        observer_loading.disconnect();
        // Open the page
        if (statusParametersEncoded) {
          let pageIndexMap = {
            karta: 0,
            stapel: 1,
            linje: 2,
            tabell: 3,
          };
          document
            .getElementsByClassName("sas_components-Image-Image_clickable")
            [pageIndexMap[page_to_open]].click();
        }
      }
    });

    observer_loading.observe(sasReport, {
      childList: true,
      subtree: true,
    });

    //disable the right-click function
    sasReport.addEventListener(
      "contextmenu",
      function (event) {
        event.stopPropagation();
      },
      true
    );

    //update indicator when firstly open the report
    let currentUrl = window.location.href;
    let UrlId = currentUrl.match(/.+id=(\d+).*/);
    let statusParametersEncoded = currentUrl.match(/.+status=(.+)/);

    if (UrlId != null && UrlId[1] in id_indicator) {
      sasReport.getReportHandle().then((reportHandle) => {
        shareParameters = indicator_init_map[id_indicator[UrlId[1]]];
        reportHandle.updateReportParameters(
          indicator_init_map[id_indicator[UrlId[1]]]
        );
      });
    } else {
      if (statusParametersEncoded) {
        if (statusParametersEncoded[1].startsWith("(")){
        shareParameters = uncrush(decodeURIComponent(statusParametersEncoded[1]));
        }else{
          shareParameters = JSON.parse(Base64.decode(statusParametersEncoded[1]));
        }
        page_to_open = shareParameters["page"];
        delete shareParameters["page"];
        sasReport.getReportHandle().then((reportHandle) => {
          reportHandle.updateReportParameters(shareParameters);
        });
      } else {
        sasReport.getReportHandle().then((reportHandle) => {
          shareParameters = indicator_init_map["Arbetsmiljö"];
          reportHandle.updateReportParameters(
            indicator_init_map["Arbetsmiljö"]
          );
        });
      }
    }

    //Receive data from two iframes;
    var iframe_title_div_innerHTML;
    window.addEventListener("message", (event) => {
      disableScrollDoubleClickOutline();
      if (typeof event.data == "object") {
        switch (event.data.type) {
          case "openUrl":
            let win = window.open(event.data.content, "_blank");
            win.focus();
            break;
          case "changeParameter":
            shareParameters = update(shareParameters, event.data.content);
            sasReport.getReportHandle().then((reportHandle) => {
              reportHandle.updateReportParameters(event.data.content);
            });
            break;
          case "screenshotInfo":
            iframe_title_div_innerHTML = event.data.content["title_div"];
            document.getElementsByClassName(
              "sas_components-Select-Select_label"
            )[2].innerText = event.data.content["Kategori"].toString();
            shareParameters["indikator_category"] =
              event.data.content["Kategori"];
            break;
          case "defaultOmradeChanged":
            var rx = /(.+)_.+/g;
            var omrade_page = rx.exec(Object.keys(event.data.content)[0])[1];
            switch (omrade_page) {
              case "stapel":
                stapelCurrentOmrade = Object.values(event.data.content)[0];
                shareParameters = update(shareParameters, {
                  linje_Område: [
                    "Stockholms län",
                    Object.values(event.data.content)[0],
                  ],
                  table_Område: [
                    "Stockholms län",
                    Object.values(event.data.content)[0],
                  ],
                });
                sasReport.getReportHandle().then((reportHandle) => {
                  reportHandle.updateReportParameters({
                    linje_Område: [
                      "Stockholms län",
                      Object.values(event.data.content)[0],
                    ],
                    table_Område: [
                      "Stockholms län",
                      Object.values(event.data.content)[0],
                    ],
                  });
                });
                defaultOmradeWhenIndicatorChanged["stapel_Område"] =
                  Object.values(event.data.content)[0];
                defaultOmradeWhenIndicatorChanged["linje_Område"] = [
                  "Stockholms län",
                  Object.values(event.data.content)[0],
                ];
                defaultOmradeWhenIndicatorChanged["table_Område"] = [
                  "Stockholms län",
                  Object.values(event.data.content)[0],
                ];
                break;
              case "linje":
                parameterTobeChanged = {};
                parameterTobeChanged["table_Område"] = Object.values(
                  event.data.content
                )[0];
                defaultOmradeWhenIndicatorChanged["linje_Område"] =
                  Object.values(event.data.content)[0];
                defaultOmradeWhenIndicatorChanged["table_Område"] =
                  Object.values(event.data.content)[0];
                if (
                  !Object.values(event.data.content)[0].includes(
                    stapelCurrentOmrade
                  )
                ) {
                  parameterTobeChanged["stapel_Område"] = Object.values(
                    event.data.content
                  )[0][Object.values(event.data.content)[0].length - 1];
                  defaultOmradeWhenIndicatorChanged["stapel_Område"] =
                    Object.values(event.data.content)[0][
                      Object.values(event.data.content)[0].length - 1
                    ];
                  stapelCurrentOmrade = Object.values(event.data.content)[0][
                    Object.values(event.data.content)[0].length - 1
                  ];
                }
                shareParameters = update(shareParameters, parameterTobeChanged);
                sasReport.getReportHandle().then((reportHandle) => {
                  reportHandle.updateReportParameters(parameterTobeChanged);
                });
                break;
              case "table":
                parameterTobeChanged = {};
                parameterTobeChanged["linje_Område"] = Object.values(
                  event.data.content
                )[0];
                defaultOmradeWhenIndicatorChanged["table_Område"] =
                  Object.values(event.data.content)[0];
                defaultOmradeWhenIndicatorChanged["linje_Område"] =
                  Object.values(event.data.content)[0];
                if (
                  !Object.values(event.data.content)[0].includes(
                    stapelCurrentOmrade
                  )
                ) {
                  parameterTobeChanged["stapel_Område"] = Object.values(
                    event.data.content
                  )[0][Object.values(event.data.content)[0].length - 1];
                  defaultOmradeWhenIndicatorChanged["stapel_Område"] =
                    Object.values(event.data.content)[0][
                      Object.values(event.data.content)[0].length - 1
                    ];
                  stapelCurrentOmrade = Object.values(event.data.content)[0][
                    Object.values(event.data.content)[0].length - 1
                  ];
                }
                shareParameters = update(shareParameters, parameterTobeChanged);
                sasReport.getReportHandle().then((reportHandle) => {
                  reportHandle.updateReportParameters(parameterTobeChanged);
                });
                break;
            }

          case "screenshotKarta":
            let kartaImage = new Image();
            let stapelImage = new Image();
            let imagesLoaded = 0;

            function createKartaScreenShot() {
              export_canvas = document.createElement("canvas");

              export_canvas.width = kartaImage.width + stapelImage.width;
              export_canvas.height =
                150 + Math.max(kartaImage.height, stapelImage.height);

              ctx = export_canvas.getContext("2d");
              ctx.fillStyle = "#ffffff"; //Set the background color as white
              ctx.fillRect(0, 0, export_canvas.width, export_canvas.height); //Set the bacground color

              ctx.drawImage(kartaImage, 0, 150);
              ctx.drawImage(stapelImage, kartaImage.width, 150);

              ctx.fillStyle = "#000000"; //Set the font color as black

              let title_lines = iframe_title_div_innerHTML.split("<br>");
              let start_y_position = 31;
              for (let i = 0; i < title_lines.length; i++) {
                let line_span = title_lines[i].match(/<.*?\/span>/gm);
                if (line_span) {
                  let line_text = "";
                  for (let j = 0; j < line_span.length; j++) {
                    line_text = line_text.concat(
                      line_span[j].match(/.*>(.+)</m)[1]
                    );
                  }
                  if (i == 0) {
                    ctx.font = "bold 22px Arial";
                    ctx.fillText(line_text, 10, start_y_position);
                    start_y_position = start_y_position + 25;
                  } else {
                    ctx.font = "15px Arial";
                    ctx.fillText(line_text, 10, start_y_position);
                    start_y_position = start_y_position + 18;
                  }
                }
              }
              let dataURL = export_canvas.toDataURL((type = "image/png"));
              let a = document.createElement("a");
              a.href = dataURL;
              a.download = "Bild Folkhälsokollen";
              a.click();
              // Clear canvas
              ctx.clearRect(0, 0, export_canvas.width, export_canvas.height);
            }

            kartaImage.onload = function () {
              imagesLoaded++;
              if (imagesLoaded == 2) {
                createKartaScreenShot();
              }
            };

            stapelImage.onload = function () {
              imagesLoaded++;
              if (imagesLoaded == 2) {
                createKartaScreenShot();
              }
            };

            kartaImage.src = event.data.content.karta;
            stapelImage.src = event.data.content.stapel;
            break;
          case "openMerInfo":
            let indikator_name = document
              .querySelector('[aria-controls="sas_RC-Dropdown-list-1"]')
              .getElementsByClassName(
                "sas_components-Select-Select_label"
              )[0].innerText;
            let indikator_info_content = indicator_info[indikator_name];
            html = `<div style="font-size: 1.5rem; text-align:left"><h1 style="font-weight: bold; font-size: 2rem">${indikator_name}</h1><span style="font-weight: bold;" title="definition">Definition: </span>${indikator_info_content["definition"]}<br><br><span style="font-weight: bold">Källa: </span>`;
            // Add källa
            kallas = indikator_info_content["källa"].split(";");
            for (let kalla of kallas) {
              var _kalla_url = källa_url_map[kalla.trim()];
              if (_kalla_url == "undefined") {
                var kalla_url = null;
              } else {
                var kalla_url = _kalla_url;
              }
              html += `<a href = ${kalla_url} target = "_blank">${kalla}</a>`;
              html += "; ";
            }
            // Add läs mer
            html += "<br><br><span style='font-weight: bold'>Läs mer:</a>";
            let las_mer = (({ definition, källa, ...o }) => o)(
              indikator_info_content
            );
            html += "<ul>";
            for (let i = 1; i <= Object.keys(las_mer).length / 2; i++) {
              let text = las_mer[`läsa_mer_${i}_text`];
              let link = las_mer[`läsa_mer_${i}_link`];
              html += `<li><a href = ${link} target = "_blank">${text}</button></li>`;
            }
            // Add closing tags
            html += "</ul></div>";
            Swal.fire({
              width: "90em",
              showConfirmButton: false,
              showCloseButton: true,
              html: html,
            });
            break;
        }
      }
    });

    // This is the js script for downloading the report as Image from browser
    document
      .getElementsByTagName("sas-report")[0]
      .addEventListener("click", (e) => {
        if (
          e.target.title ==
          "Klicka här för att spara en bild av din visualisering. Bilden laddas ned som en jpg-fil på din dator."
        ) {
          let export_canvas = document.createElement("canvas");
          let figure_canvases = document.getElementsByTagName("canvas");
          let ctx;
          if (figure_canvases.length != 0) {
            //Get image data from SAS VA SDK
            export_canvas.width = figure_canvases[0].width;
            export_canvas.height = 150 + figure_canvases[0].height;
            ctx = export_canvas.getContext("2d");

            ctx.fillStyle = "#ffffff"; //Set the background color as white
            ctx.fillRect(0, 0, export_canvas.width, export_canvas.height); //Set the bacground color

            ctx.drawImage(figure_canvases[0], 0, 150);
            ctx.fillStyle = "#000000"; //Set the font color as black
            let title_lines = iframe_title_div_innerHTML.split("<br>");
            start_y_position = 31;
            for (let i = 0; i < title_lines.length; i++) {
              let line_span = title_lines[i].match(/<.*?\/span>/gm);
              if (line_span) {
                let line_text = "";
                for (let j = 0; j < line_span.length; j++) {
                  line_text = line_text.concat(
                    line_span[j].match(/.*>(.+)</m)[1]
                  );
                }
                if (i == 0) {
                  ctx.font = "bold 22px Arial";
                  ctx.fillText(line_text, 10, start_y_position);
                  start_y_position = start_y_position + 25;
                } else {
                  ctx.font = "15px Arial";
                  ctx.fillText(line_text, 10, start_y_position);
                  start_y_position = start_y_position + 18;
                }
              }
            }
            let dataURL = export_canvas.toDataURL((type = "image/png"));
            let a = document.createElement("a");
            a.href = dataURL;
            a.download = "Bild Folkhälsokollen";
            a.click();

            // Clear canvas
            ctx.clearRect(0, 0, export_canvas.width, export_canvas.height);
          } else {
            //Get image data from iframe
            document
              .getElementsByTagName("iframe")[2]
              .contentWindow.postMessage(
                (message = {
                  type: "takeScreenShot",
                }),
                (targetOrigin = "*")
              );
          }
        } else if (e.target.title == "Klicka här för att spara en Excel fil.") {
          sasReport.getReportHandle().then((reportHandle) => {
            reportHandle.getObjectHandle("ve2627").then((objecetHandle) => {
              objecetHandle.exportData("XLSX").then((excelUrl) => {
                let win = window.open(excelUrl, "_blank");
                win.focus();
              });
            });
          });
        } else if (
          e.target.title ==
          "Använd den här länken för att dela sidan med de data du har valt."
        ) {
          let rx = /.+\/(.+)_selector.+/g;
          let current_visualization_type = rx.exec(
            document.getElementsByTagName("iframe")[0].src
          )[1];
          shareParameters["page"] = current_visualization_type;
          shareParameters["indikator_group"] = document
            .querySelector('[aria-controls="sas_RC-Dropdown-list-0"]')
            .getElementsByClassName(
              "sas_components-Select-Select_label"
            )[0].innerText;
          shareParameters["indikator_name"] = document
            .querySelector('[aria-controls="sas_RC-Dropdown-list-1"]')
            .getElementsByClassName(
              "sas_components-Select-Select_label"
            )[0].innerText;
          if (currentUrl.includes("webbverktyg-test")) {
            //for test page
            var shareURL =
              "https://www.folkhalsokollen.se/webbverktyg/webbverktyg-test/?status=" +
              encodeURIComponent(crush(shareParameters));
          } else {
            //for prod page
            var shareURL =
              "https://www.folkhalsokollen.se/webbverktyg/?status=" +
              encodeURIComponent(crush(shareParameters));
          }
          Swal.fire({
            width: "70em",
            showConfirmButton: false,
            showCloseButton: true,
            html: `<div style = "font-size: 2rem; margin-bottom: 10px">Använd den här länken för att dela sidan med de data du har valt</div>
            <div>
<input id = "inputUrl" type="text" value="${shareURL}" readonly style="width: 90%; font-size: 1.5rem"> </div>
<button  type="button" id="copyButton" class="swal2-confirm swal2-styled" style="font-size: 1.5rem; margin-top: 10px ; background-color: #612361;" onclick = "copyUrl()"><div><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg> Kopiera</div></button>
`,
          });
        }
      });
  });
});
