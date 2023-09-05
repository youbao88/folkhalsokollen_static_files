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
        icons[i].title == "dela"
      ) {
        icons[i].parentNode.parentNode.parentNode.classList.add("tool_icon");
      } else {
        let icon_div = icons[i].parentNode.parentNode.parentNode.parentNode;
        if (icon_div.style.backgroundColor != "rgb(233, 236, 239)") {
          icon_div.classList.add("tab_icon");
        }
      }
    }

    //Hide mer info link
    document.getElementsByClassName(
      "sas_components-BirdText-BirdText_text"
    )[0].hidden = true;
  }
  window.addEventListener("vaReportComponents.loaded", function () {
    let shareParameters;
    let sasReport = document.getElementById("my-report");
    let stapelCurrentOmrade = "Stockholms län";
    let defaultOmradeWhenIndicatorChanged = {};

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
          let pageToBeOpen = JSON.parse(atob(statusParametersEncoded[1]))[
            "page"
          ];
          document
            .getElementsByClassName("sas_components-Image-Image_clickable")
            [pageIndexMap[pageToBeOpen]].click();
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
        shareParameters = JSON.parse(atob(statusParametersEncoded[1]));
        delete shareParameters["page"];
        sasReport.getReportHandle().then((reportHandle) => {
          reportHandle.updateReportParameters(
            JSON.parse(atob(statusParametersEncoded[1]))
          );
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
        } else if (e.target.title == "Använd den här länken för att dela sidan med de data du har valt.") {
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
              btoa(JSON.stringify(shareParameters));
          } else {
            //for prod page
            var shareURL =
              "https://www.folkhalsokollen.se/webbverktyg/?status=" +
              btoa(JSON.stringify(shareParameters));
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
