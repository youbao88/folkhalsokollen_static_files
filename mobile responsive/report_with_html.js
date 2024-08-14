//Inject HTML code 
main_div = document.getElementsByTagName('main')[0]
main_div.innerHTML = `<sas-report authenticationtype=guest hidenavigation=auto id=my-report reporturi=/reports/reports/c627312e-ee81-4130-9bf0-f89d194366c4 style=display:none url=https://slso-atea.saasnow.com></sas-report><div class="container loading"id=loading><div class=center><div class=lds-ring><div></div><div></div><div></div><div></div></div><div class=loading-text>webbverktyget laddas...</div><div class=loading-tip><p class="fade-in first-line">Använd webbverktyget från en dator eller surfplatta. För att garantera att det visas på bästa sätt rekommenderar vi webbläsarna Microsoft Edge (alla versioner), Firefox 12, Google chrome 19, Internet explorer 10, Safari 5.1 eller senare versioner av dessa.</div></div></div><div class="container error"id=error><div class=center><img src=https://img.icons8.com/emoji/50/null/warning-emoji.png style=margin:auto><div class=ErrorMessageTitle>Fel: Verktyget kunde inte läsas in</div><div class=ErrorMessageMain><span>Det har uppstått ett fel mellan Folkhälsokollen och webbläsaren. Du kan försöka åtgärda problemet genom att göra något av följande:</span></div><div class="ErrorMessageMain indent"><span>1. Ladda om sidan</span></div><div class="ErrorMessageMain indent"><span>2. Cookies är blockerade, läs mer </span><a href=https://www.folkhalsokollen.se/hantera-kakor target=_blank>Hantera kakor i din webbläsare</a></div><div class="ErrorMessageMain indent biggerSpace"><span>Kontakta <a href="mailto: folkhalsokollen.slso@regionstockholm.se">folkhalsokollen.slso@regionstockholm.se</a> om felet kvarstår.</span></div></div></div><div class="container mt-5"id=report style=display:none><div class=row><div class="d-flex align-items-center col-md-4 justify-content-center"><div class="selectorWrap fullWidth"><div class="selectorTextWrap transparentBg"><span class="selectorText blackText font-weight-bold">1. Välj folkhälsoområde</span></div><div class="selectorDropdown p-0 transparentBg"><select class="selectpicker show-tick"data-style=mySelectpicker data-width=100% id=indicator_area_selector sas-parameter=indikator_group></select></div></div></div><div class="d-flex align-items-center col-md-4 justify-content-center"><div class="selectorWrap fullWidth"><div class="selectorTextWrap transparentBg"><span class="selectorText blackText font-weight-bold">2. Välj hälsoindikator</span></div><div class="selectorDropdown p-0 transparentBg"><select class="selectpicker show-tick"data-style=mySelectpicker data-width=100% id=indicator_selector sas-parameter=indikator_name></select></div></div></div><div class="d-flex align-items-center col-md-4 justify-content-center"><div class="selectorWrap fullWidth"><div class="selectorTextWrap transparentBg"><span class="selectorText blackText font-weight-bold">3. Filtrera data</span></div><div class="selectorDropdown p-0 transparentBg"><select class="selectpicker show-tick"data-style=mySelectpicker data-width=100% id=indicator_cat_selector sas-parameter=indikator_category data-actions-box=true data-select-all-text="välj alla"multiple></select></div></div></div></div><div class="row mt-4"><div class="d-flex col-md-3 flex-column gray"><div class=mb-3><div class=selectorWrap><div class=selectorTextWrap><span class=selectorText>4. Välj tidsperiod</span></div><div class=selectorDropdown><select class="selectpicker show-tick"data-style=mySelectpicker data-width=100% id=karta_tidsperiod sas-parameter=karta_Tidsperiod></select></div></div></div><div class=mb-3><div class=selectorWrap><div class=selectorTextWrap><span class=selectorText>5. Välj kön</span></div><div class=selectorDropdown><select class=selectpicker data-style=mySelectpicker data-width=100% id=karta_kon sas-parameter=karta_Kön data-actions-box=true data-select-all-text="välj alla"multiple></select></div></div></div><div class=mb-3><div class=selectorWrap><div class=selectorTextWrap><span class=selectorText>6. Välj ålder</span></div><div class=selectorDropdown><select class=selectpicker data-style=mySelectpicker data-width=100% id=karta_alder sas-parameter=karta_Åldersgrupp data-actions-box=true data-select-all-text="välj alla"multiple></select></div></div></div></div><div class=col-md-9><div id=titleContainer><div class=spinnerContainer id=titleSpinner style=width:100%;height:100%><div class=spinner-border role=status><span class=sr-only>laddas...</span></div></div><div id=iframe_title_div style=width:100%;font-family:Arial,Helvetica,sans-serif></div></div><div class=row><div class=col-md-6><div id=karta style=width:100%;height:65vh></div></div><div class=col-md-6><div style=width:100%;height:65vh><canvas id=karta_stapel></canvas></div></div></div></div></div></div>`
// Detect if the 3rd party cookie is enbaled
iframe = document.createElement("iframe");
iframe.src =
  "https://rawcdn.githack.com/youbao88/folkhalsokollen_static_files/cb60ff854ce087e4b99d71e2bb63dc3d920742e8/3rdpartycookiecheckstart.html";
iframe.style.display = "none";
document.body.appendChild(iframe);
var receiveMessage = function (evt) {
  if (evt.data === "MM:3PCunsupported") {
    // If 3rd party cookie is not enabled
    console.log("third party cookies are not supported");
    $("#loading").hide();
    let mainDiv = document.getElementsByTagName("main")[0];
    let thirdPartyErrorDiv = mainDiv.appendChild(document.createElement("div"));
    thirdPartyErrorDiv.setAttribute("id", "thirdPartyErrorDiv");
    thirdPartyErrorDiv.setAttribute("class", "container error")
    let wrapDiv = thirdPartyErrorDiv.appendChild(document.createElement("div"));
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
    window.stop();
  } else if (evt.data === "MM:3PCsupported") {
    console.log("third party cookies are supported");
  }
};
window.addEventListener("message", receiveMessage, false, {
  once: true,
});

// Get all data and selected data from ObjectHanle and initialize the dropdown menus
function initSelection(handle, selectDiv) {
  let allData = handle.getData()[0].data;
  if (allData.length > 1) {
    selectDiv.prop("disabled", false).selectpicker("refresh");
  }
  let selectedData = handle.getSelectedData()[0].data;
  selectDiv.empty();
  allData.forEach((element) => {
    selectDiv.append(
      `<option value="${element}" data-tokens="${element}">${element}</option>`
    );
  });
  selectDiv.selectpicker("refresh");
  selectDiv.val(selectedData).selectpicker("refresh");
  if (allData.length <= 1) {
    selectDiv.prop("disabled", true).selectpicker("refresh");
  }
}
// Update drop down to default selections when indicator_name changed
function updateDefaultParameters() {
  let new_indicator = $("#indicator_selector").val();
  let parameters = indicator_name_parameter_map[new_indicator];
  if (parameters) {
    $("#karta_tidsperiod").selectpicker(
      "val",
      parameters["karta"]["karta_Tidsperiod"]
    );
    $("#karta_kon").selectpicker(
      "val",
      parameters["karta"]["karta_Tidsperiod"]
    );
    $("#karta_alder").selectpicker(
      "val",
      parameters["karta"]["karta_Åldersgrupp"]
    );
  }
}
window.addEventListener("vaReportComponents.loaded", async () => {
  const sasReport = document.getElementById("my-report");
  // Get report Handler
  const reportHandle = await sasReport.getReportHandle();
  // Get object handlers
  const indicator_area_selector_oh = await reportHandle.getObjectHandle("ve92");
  indicator_area_selector_oh.addEventListener("selectionChanged", () => {
    initSelection(indicator_area_selector_oh, $("#indicator_area_selector"));
  });
  const indicator_selector_oh = await reportHandle.getObjectHandle("ve107");
  indicator_selector_oh.addEventListener("selectionChanged", () => {
    initSelection(indicator_selector_oh, $("#indicator_selector"));
  });

  const indicator_cat_selector_oh = await reportHandle.getObjectHandle("ve133");
  indicator_cat_selector_oh.addEventListener("selectionChanged", () => {
    initSelection(indicator_cat_selector_oh, $("#indicator_cat_selector"));
  });

  const karta_tidsperiod_selector_oh = await reportHandle.getObjectHandle(
    "ve44856"
  );
  const karta_kon_selector_oh = await reportHandle.getObjectHandle("ve44927");
  const karta_alder_selector_oh = await reportHandle.getObjectHandle("ve44899");

  const map_oh = await reportHandle.getObjectHandle("ve30072");

  const enhet_oh = await reportHandle.getObjectHandle("ve45358");

  // const selector_ddh = await reportHandle.getObjectHandle("ve44991");
  // selector_ddh.on_message((message) =>{
  //   console.log(message);
  // })

  // Waiting until the report state has been changed
  reportHandle.addEventListener("readyStateChanged", async () => {
    switch (reportHandle.readyState) {
      // If error, hide loading container and display error container
      case "loading":
        $("#loading").display();
        break;
      case "error":
        $("#loading").hide();
        $("error").display();
        break;
      // If complete
      case "complete":
        initSelection(
          indicator_area_selector_oh,
          $("#indicator_area_selector")
        );
        //   Getting reportHandle for the 2. Välj hälsoindikator and initialize the selection
        initSelection(indicator_selector_oh, $("#indicator_selector"));
        // Getting reportHandle for the 3. Filtrera data and initialize the selection
        initSelection(indicator_cat_selector_oh, $("#indicator_cat_selector"));
        // Getting reportHandle for the 4. Välj tidsperiod and initialize the selection
        initSelection(karta_tidsperiod_selector_oh, $("#karta_tidsperiod"));
        // Getting reportHandle for the 5. Välj kön and initialize the selection
        initSelection(karta_kon_selector_oh, $("#karta_kon"));
        // Getting reportHandle for the Välj ålder and initialize the selection
        initSelection(karta_alder_selector_oh, $("#karta_alder"));
        //Init visualization
        InitMapBar(map_oh.getData());
        //Init title
        InitTitle();
        //If in mobile, selector would be in mobile style
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
        ) {
          $(".selectpicker").selectpicker("mobile");
        }
        // When the selector has been changed, use parameters to change the value for the data
        $(".selectpicker").on(
          "changed.bs.select",
          function (e, clickedIndex, isSelected, previousValue) {
            if ($(this).val().length < 1) {
              $(this).val(previousValue);
              $(this).selectpicker("refresh");
            } else {
              $("#titleSpinner").show();
              let parameterName =
                e.target.attributes["sas-parameter"].textContent;
              reportHandle.updateReportParameters({
                [parameterName]: $(this).val(),
              });
            }
          }
        );
        // Init selection based on default selection
        updateDefaultParameters();
        // Hide loading page and display the report page
        $("#loading").hide();
        $("#report").show();

        window.addEventListener("message", (message) => {
          if (message.data == "selector_updated") {
            initSelection(karta_tidsperiod_selector_oh, $("#karta_tidsperiod"));
            initSelection(karta_kon_selector_oh, $("#karta_kon"));
            initSelection(karta_alder_selector_oh, $("#karta_alder"));

            updateDefaultParameters();
          } else if (message.data == "visualization_updated") {
            InitTitle();
            InitMapBar(map_oh.getData());
          }
        });
        break;
    }
  });
  //Code for title
  const indicatorNameWithMindreOmråde = [
    "Boendeform",
    "Familjetyp",
    "Födelseland",
    "Åldersgrupper",
    "Ohälsotal",
    "Slutenvårdstillfällen",
    "Öppenvårdsbesök",
    "Ekonomiskt bistånd",
    "Huvudsaklig sysselsättning",
    "Inkomstnivå",
    "Utbildningsnivå",
    "Ohälsodagar",
    "Vaccination mot covid-19 (minst 2 doser)",
    "Vaccination mot säsongsinfluensa",
    "Exponeras för luftföroreningar",
    "Exponeras för trafikbuller",
    "Tillgång till grönska i närområdet",
    "Livsvillkorsindex",
  ];

  function combineAgeInterval(originalInterval) {
    if (originalInterval.length == 1) {
      return originalInterval;
    } else {
      var ålder_interval = [];
      for (let j = 0; j < originalInterval.length; j++) {
        var interval = originalInterval[j].replace(" år", "");
        if (interval.charAt(interval.length - 1) == "+") {
          //if tne interval is like 'XX+'
          ålder_interval.push([interval.replace("+", ""), "+"]);
        } else {
          //if the interval is ended up without 'XX-XX'
          ålder_interval.push(interval.split("-"));
        }
      }
      ålder_interval = ålder_interval.sort((a, b) => a[0] - b[0]); //sort ålder_interval based on the first value;

      var ålder_interval_processed = [];
      ålder_interval_processed.push(ålder_interval[0]);
      for (let j = 1; j < ålder_interval.length; j++) {
        if (
          parseInt(ålder_interval[j][0]) - 1 ==
          parseInt(
            ålder_interval_processed[ålder_interval_processed.length - 1][1]
          )
        ) {
          ålder_interval_processed[ålder_interval_processed.length - 1][1] =
            ålder_interval[j][1];
        } else {
          ålder_interval_processed.push(ålder_interval[j]);
        }
      }

      var ålder_interval_output = [];
      for (let j = 0; j < ålder_interval_processed.length; j++) {
        if (ålder_interval_processed[j][1] != "+") {
          ålder_interval_output.push(
            `${ålder_interval_processed[j][0]}-${ålder_interval_processed[j][1]} år`
          );
        } else {
          ålder_interval_output.push(`${ålder_interval_processed[j][0]}+ år`);
        }
      }
      return ålder_interval_output;
    }
  }

  function shortenValue(values) {
    var omittedNumber = 0;
    var omittedValues = [];
    if (values.length <= 6) {
      return [values, omittedNumber, omittedValues];
    } else {
      var trimedValues = values.slice(0, 6);
      var omittedNumber = values.length - 6;
      var omittedValues = values.slice(6);
      return [trimedValues, omittedNumber, omittedValues];
    }
  }

  // Retrieve data and begin processing
  function InitTitle() {
    var div = document.getElementById("iframe_title_div");
    div.innerHTML = "";

    let indicator_name = $("#indicator_selector").val();
    let indicator_filter = $("#indicator_cat_selector").val();
    div.innerHTML += `<span class = "big-title bold">${indicator_name}</h1>`;
    if (!indicator_filter.includes("Ej valbart")) {
      div.innerHTML += ": ";
      if (indicator_name == "Åldersgrupper") {
        indicator_filter = combineAgeInterval(indicator_filter);
      }
      for (var i = 0; i < indicator_filter.length; i++) {
        div.innerHTML += `<span class = 'big-title bold'>${indicator_filter[i]}</span>`;
        if (i < indicator_filter.length - 1) {
          div.innerHTML += "<span class = 'big-title bold'>; </span>";
        } else {
          div.innerHTML += "<br>";
        }
      }
    } else {
      div.innerHTML += "<br>";
    }
    var tidsperiod_val = $("#karta_tidsperiod").val();
    div.innerHTML += `<span class = 'title'>Tidsperiod: </span>`;
    div.innerHTML += `<span class = 'title bold'>${tidsperiod_val}</span><br>`;

    var kon_val = $("#karta_kon").val();
    div.innerHTML += `<span class = 'title'>Kön: </span>`;
    div.innerHTML += `<span class = 'title bold'>${kon_val.join([
      (separator = "; "),
    ])}</span><br>`;

    var aldersgrup_val = $("#karta_alder").val();
    div.innerHTML += `<span class = 'title'>Åldersgrupp: </span>`;
    var aldersgrup_val_combined = combineAgeInterval(aldersgrup_val);
    div.innerHTML += `<span class = 'title bold'>${aldersgrup_val_combined.join(
      [(separator = "; ")]
    )}</span><br>`;
    div.innerHTML += `<span class = 'title'>Enhet: </span><span class = 'title bold'>${
      enhet_oh.getSelectedData()[0].data[0]
    }</span>`;

    if (
      [
        "Amning vid 4 månaders ålder",
        "Ångestkänslor (grundskola åk 9)",
        "Ångestkänslor (gymnasiet år 2)",
        "Använder vitt snus (grundskola åk 9)",
        "Använder vitt snus (gymnasiet år 2)",
        "Huvudvärk (grundskola åk 9)",
        "Huvudvärk (gymnasiet år 2)",
        "Röker e-cigaretter (grundskola åk 9)",
        "Röker e-cigaretter (gymnasiet år 2)",
      ].includes(indicator_name)
    ) {
      div.innerHTML += `
                    <span class = 'title'> (Om uppgifter saknas anges asterisk * )</span>
                    `;
    } else {
      if (
        [
          "Dödsfall på grund av covid-19",
          "Sjukhusinläggning med covid-19",
          "Autismspektrumtillstånd (diagnostiserad)",
          "Anmälan socialtjänst via BVC",
          "Bröstcancer",
          "Lungcancer",
          "Prostatacancer",
          "Adhd (diagnostiserad)",
          "Depression och ångest (diagnostiserad)",
          "Tjock- och ändtarmscancer",
        ].includes(indicator_name)
      ) {
        div.innerHTML += `
                    <span class = 'title'> (asterisk * anges vid mindre än 10 fall)</span>
                    `;
      }
    }
    div.innerHTML +=
      "<br><a id = 'merInfo' class = 'title title-link'> Definition och mer information </a>";
    if (indicatorNameWithMindreOmråde.includes(indicator_name)) {
      div.innerHTML +=
        "<br><span class = 'title'>Tillgänglig nivå: </span><span class = 'title bold'>län, kommun/stadsdel, kommundel</span>";
    } else {
      div.innerHTML +=
        "<br><span class = 'title'>Tillgänglig nivå: </span><span class = 'title bold'>län, kommun/stadsdel</span>";
    }
    let indikator_info_content = indicator_info[indicator_name];
    if (indikator_info_content) {
      let definition_html = `<div style="font-size: 1.5rem; text-align:left"><h1 style="font-weight: bold; font-size: 2rem">${indicator_name}</h1><span style="font-weight: bold;" title="definition">Definition: </span>${indikator_info_content["definition"]}<br><br><span style="font-weight: bold">Källa: </span>`;
      // Add källa
      let kallas = indikator_info_content["källa"].split(";");
      for (let kalla of kallas) {
        var _kalla_url = källa_url_map[kalla.trim()];
        if (_kalla_url == "undefined") {
          var kalla_url = null;
        } else {
          var kalla_url = _kalla_url;
        }
        definition_html += `<a href = ${kalla_url} target = "_blank">${kalla}</a>`;
        definition_html += "; ";
      }
      // Add läs mer
      definition_html += "<br><br><span style='font-weight: bold'>Läs mer:</a>";
      let las_mer = (({ definition, källa, ...o }) => o)(
        indikator_info_content
      );
      definition_html += "<ul>";
      for (let i = 1; i <= Object.keys(las_mer).length / 2; i++) {
        let text = las_mer[`läsa_mer_${i}_text`];
        let link = las_mer[`läsa_mer_${i}_link`];
        definition_html += `<li><a href = ${link} target = "_blank">${text}</button></li>`;
      }

      // Add closing tags
      definition_html += "</ul></div>";
      document.getElementById("merInfo").addEventListener("click", () => {
        Swal.fire({
          width: "90em",
          showConfirmButton: false,
          showCloseButton: true,
          html: definition_html,
        });
      });
    }
  }
  // Code for karta map and karta bar
  var mymap;
  var barchart;
  var isOnKommun = true;

  var first_label_sorted;
  var first_value_sorted;
  var geojson;
  var first_level_data;
  var first_backgroundColor;
  var stockholm_kommun_sorted;

  var second_label;
  var second_json_data;
  var second_label;
  var second_level_data;
  var second_label_sorted;
  var second_value_sorted;
  var current_value_max;
  var current_value_min;
  var isSupressed;
  var legend;
  var info;
  var currentjson;
  var tileLayer;
  var isOnMindre;
  var event_rows;

  //List of Stockholm stadsdelar
  const stadsdelarList = [
    "Bromma",
    "Enskede-Årsta-Vantör",
    "Farsta",
    "Hägersten-Älvsjö",
    "Hässelby-Vällingby",
    "Kungsholmen",
    "Norra Innerstaden",
    "Järva",
    "Skarpnäck",
    "Skärholmen",
    "Södermalm",
  ];
  //List of Stockholm kommun
  const firstLevelAreaList = [
    "Botkyrka",
    "Bromma",
    "Danderyd",
    "Ekerö",
    "Enskede-Årsta-Vantör",
    "Farsta",
    "Haninge",
    "Huddinge",
    "Hägersten-Älvsjö",
    "Hässelby-Vällingby",
    "Järfälla",
    "Kungsholmen",
    "Lidingö",
    "Nacka",
    "Norra Innerstaden",
    "Norrtälje",
    "Nykvarn",
    "Nynäshamn",
    "Salem",
    "Sigtuna",
    "Skarpnäck",
    "Skärholmen",
    "Sollentuna",
    "Solna",
    "Järva",
    "Sundbyberg",
    "Södermalm",
    "Södertälje",
    "Tyresö",
    "Täby",
    "Upplands Väsby",
    "Upplands-Bro",
    "Vallentuna",
    "Vaxholm",
    "Värmdö",
    "Österåker",
    "Stockholms län",
    "Stockholm",
  ];
  async function getJson() {
    let response = await fetch(
      "https://cdn.statically.io/gh/youbao88/folkhalsokollen_static_files/42ab89f98ff4c2cf774f226e2b6bb7aa596c48d1/fhk_karta_merged_240531.json"
    );
    let data = await response.json();
    return data;
  }
  async function InitMapBar(data) {
    if (data[0] && data[0].data) {
      //Use the length of the data (number of areas) to determain if the indicator supports mindre område
      if (data[0].data.length <= 40) {
        isOnMindre = false;
      } else {
        isOnMindre = true;
      }

      //Create empty first_level_data object to store the first level (kommun) data
      first_level_data = {};
      const stockholm_json = await getJson();

      event_rows = data[0].data;
      //Put data into first_level_data object by whose key is the area name and the value is the indicator value
      for (let i = 0; i < event_rows.length; i++) {
        if (firstLevelAreaList.includes(event_rows[i][2])) {
          if (first_level_data[event_rows[i][2]] == undefined) {
            first_level_data[event_rows[i][2]] = event_rows[i][1];
          } else {
            first_level_data[event_rows[i][2]] += event_rows[i][1];
          }
        }
      }

      //Round the values in two digit decimal place
      for (let objectName in first_level_data) {
        if (first_level_data[objectName] != ".") {
          first_level_data[objectName] =
            Math.round(first_level_data[objectName] * 100) / 100;
        }
      }

      //Get unit info
      let unit = event_rows[0][0];

      //Create a function for bar chart display color
      function generate_color(labels) {
        let output = [];
        for (let i = 0; i < labels.length; i++) {
          if (labels[i] == "Stockholms län") {
            output.push("rgba(101, 29, 120, 0.8)");
          } else {
            output.push("rgba(176,183,194, 0.8)");
          }
        }
        return output;
      }

      //Create a function for bar chart hover color
      function generate_hover_color(labels) {
        let output = [];
        for (let i = 0; i < labels.length; i++) {
          if (labels[i] == "Stockholms län") {
            output.push("rgba(62, 20, 73, 0.9)");
          } else {
            output.push("rgba(98,98,98, 0.9)");
          }
        }
        return output;
      }

      //Sort the values in the first_level_data and return label name
      first_label_sorted = Object.keys(first_level_data).sort(function (a, b) {
        if (first_level_data[a] == ".") return 1;
        if (first_level_data[b] == ".") return -1;
        return first_level_data[b] - first_level_data[a];
      });

      //Sort the values in the first_level_data and return the value
      first_value_sorted = Object.values(first_level_data).sort(function (
        a,
        b
      ) {
        if (a == ".") return 1;
        if (b == ".") return -1;
        return b - a;
      });
      //Determain if the data contains 'missing value'(.)
      if (first_value_sorted.includes(".")) {
        isSupressed = true;
      } else {
        isSupressed = false;
      }

      //Get the max and min value
      current_value_max = Math.max.apply(
        Math,
        Object.values(first_level_data).filter(function (e) {
          return e !== ".";
        })
      );
      current_value_min = Math.min.apply(
        Math,
        Object.values(first_level_data).filter(function (e) {
          return e !== ".";
        })
      );

      first_backgroundColor = generate_color(first_label_sorted);
      let current_bar_selection_index = null;
      let current_choro_selection_index = null;
      let stockholm_kommun = stockholm_json["stockholm län"].features;
      stockholm_kommun_sorted = stockholm_kommun.sort(
        (a, b) =>
          first_label_sorted.indexOf(a.properties.omr_namn) -
          first_label_sorted.indexOf(b.properties.omr_namn)
      );
      for (let i = 0; i < stockholm_kommun_sorted.length; i++) {
        omrade = stockholm_kommun_sorted[i].properties.omr_namn;
        stockholm_kommun_sorted[i].properties.value = first_level_data[omrade];
      }
      if (
        typeof mymap == "undefined" ||
        !(isOnKommun == false && isOnMindre == true)
      ) {
        if (typeof mymap != "undefined") {
          mymap.gestureHandling.disable();
          mymap.remove();
        }
        if (barchart !== undefined && barchart !== null) {
          barchart.destroy();
        }
        const southWest = L.latLng(58.718, 16.858);
        const northEast = L.latLng(60.249, 19.526);
        const bounds = L.latLngBounds(southWest, northEast);

        // For the choropleth
        mymap = L.map("karta", {
          attributionControl: false,
          preferCanvas: true,
          gestureHandling: true,
          gestureHandlingOptions: {
            text: {
              touch: "Använd två fingrar för att flytta kartan",
              scroll: "Använd ctrl + scroll för att zooma på kartan",
              scrollMac: "Använd \u2318 + scroll för att zooma på kartan",
            },
            duration: 1500,
          },
        })
          .setMaxBounds(bounds)
          .setView([59.5, 18.15], 8, {
            animate: false,
          });

        tileLayer = L.tileLayer(
          "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            id: "outdoors-v11",
            accessToken:
              "pk.eyJ1IjoibWluaGFvemhvdSIsImEiOiJjbDZkcDUwdTMwMDlhM2txYzVnNjlndGJ1In0.pNM75PZvZEXrzCAPnYKpbg",
            maxZoom: 19,
            tileSize: 512,
            zoomOffset: -1,
          }
        );

        function getColor(d) {
          let interval = (current_value_max - current_value_min) / 5;
          return d == "."
            ? "#D3D3D3"
            : d >= current_value_min + 4 * interval
            ? "#297b7b"
            : d >= current_value_min + 3 * interval
            ? "#529494"
            : d >= current_value_min + 2 * interval
            ? "#7fb0b0"
            : d >= current_value_min + 1 * interval
            ? "#c3dada"
            : d >= current_value_min
            ? "#e2eded"
            : "#ffffff";
        }

        function style(feature) {
          return {
            fillColor: getColor(feature.properties.value),
            weight: 2,
            opacity: 1,
            color: "rgb(245, 243, 240, 0.8)",
            weight: 2,
            fillOpacity: 0.85,
          };
        }

        function style_transparent(feature) {
          return {
            fillColor: getColor(feature.properties.value),
            weight: 2,
            opacity: 1,
            color: "rgb(245, 243, 240, 0.8)",
            weight: 2,
            fillOpacity: 0.8,
          };
        }

        function simple_style() {
          return {
            fillColor: "#909090",
            opacity: 1,
            color: "#000000",
            weight: 1,
            fillOpacity: 0.8,
          };
        }

        //Create dynamic info div when hovered
        info = L.control();

        info.onAdd = function (map) {
          this._div = L.DomUtil.create("div", "info arrow-bottom"); // create a div with a class "info"
          this.update();
          return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
          this._div.innerHTML = props
            ? "<b>Område:</b>" +
              props.omr_namn +
              "<br /><b> Värde: </b>" +
              (props.value == "."
                ? "*"
                : props.value.toLocaleString("sv-SE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })) +
              "</br><b>Enhet: </b>" +
              unit
            : " ";
        };

        //Create static info div when clicked
        let infoClicked = L.control({
          position: "bottomleft",
        });

        infoClicked.onAdd = function (map) {
          this._div = L.DomUtil.create("div", "info arrow-bottom"); // create a div with a class "info"
          this.update();
          return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        infoClicked.update = function (omrade) {
          this._div.innerHTML = omrade ? "<b>" + omrade + "</b>" : "";
        };

        //Initialize center button
        let centerButton = L.easyButton(
          "<span class='fas fa-arrow-rotate-right' title = 'Uppdatera kartan'></span>",
          function () {
            //center the view
            mymap.fitBounds(currentjson.getBounds());
          }
        );
        centerButton.addTo(mymap);
        //Initialize go-back button
        let goBackButton = L.easyButton(
          "<span class='fas fa-arrow-left' title = 'Gå bakåt'></span>",
          // "<i class='goBackButton fa-solid fa-arrow-rotate-left' title = 'Go back'></span>",
          function () {
            //Reset map

            current_value_max = Math.max.apply(
              Math,
              Object.values(first_level_data)
            );
            current_value_min = Math.min.apply(
              Math,
              Object.values(first_level_data)
            );
            if (first_value_sorted.includes(".")) {
              isSupressed = true;
            } else {
              isSupressed = false;
            }

            secondjson.remove();
            simpleGeojson.remove();
            tileLayer.remove();
            geojson = L.geoJson(stockholm_kommun_sorted, {
              style: style,
              onEachFeature: onEachFeature,
            });
            geojson.addTo(mymap);
            legend.remove();
            legend.addTo(mymap);
            infoClicked.remove();
            currentjson = geojson;
            isOnKommun = true;
            mymap.fitBounds(geojson.getBounds());

            //Reset barchart
            barchart.config.data = {
              responsive: true,
              labels: first_label_sorted,
              datasets: [
                {
                  label: "Värde",
                  data: first_value_sorted,
                  backgroundColor: generate_color(first_label_sorted),
                  borderColor: generate_color(first_label_sorted),
                  borderWidth: 1,
                  hoverBackgroundColor:
                    generate_hover_color(first_label_sorted),
                },
              ],
            };
            barchart.update();

            goBackButton.remove();

            simpleGeojson = L.geoJson(stockholm_kommun_sorted, {
              style: simple_style,
            });
          }
        );

        function highlightFeature(e) {
          let layer = e.target;

          layer.setStyle({
            weight: 3,
            color: "#666",
            dashArray: "",
            fillOpacity: 0.9,
          });

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
          }

          info.addTo(mymap);
          info.update(layer.feature.properties);

          barchart.setActiveElements([
            {
              datasetIndex: 0,
              index: barchart.data.labels.indexOf(
                layer.feature.properties.omr_namn
              ),
            },
          ]);
          barchart.tooltip.setActiveElements([
            {
              datasetIndex: 0,
              index: barchart.data.labels.indexOf(
                layer.feature.properties.omr_namn
              ),
            },
          ]);
          barchart.update("none");
        }

        function resetHighlight(e) {
          if (mymap.hasLayer(geojson)) {
            geojson.resetStyle();
          } else {
            if (mymap.hasLayer(secondjson)) {
              secondjson.resetStyle();
            }
          }
          info.remove();
          barchart.setActiveElements([]);
          barchart.tooltip.setActiveElements([]);
          barchart.update("none");
        }

        if (isOnMindre) {
          function zoomToFeature(e) {
            let clickedOmrade;
            if (e.target) {
              clickedOmrade = e.target.feature.properties.omr_namn;
            } else {
              clickedOmrade = barchart.data.labels[e[0].index];
            }
            if (
              isOnKommun &
              (clickedOmrade != "Stockholms län") &
              (clickedOmrade != "Stockholm")
            ) {
              //Delete original layer and add detail layer
              geojson.remove(); //Remove main layer
              simpleGeojson.remove();
              second_json_data = stockholm_json[clickedOmrade].features; //Get geojson data for each clicked area
              second_label = [];
              for (let i = 0; i < second_json_data.length; i++) {
                second_label.push(second_json_data[i].properties.omr_namn);
              }

              second_level_data = {};
              for (let i = 0; i < event_rows.length; i++) {
                if (second_label.includes(event_rows[i][2])) {
                  second_level_data[event_rows[i][2]] = event_rows[i][1];
                }
              }
              for (let objectName in second_level_data) {
                if (second_level_data[objectName] != ".") {
                  second_level_data[objectName] =
                    Math.round(second_level_data[objectName] * 100) / 100;
                }
              }
              second_label_sorted = Object.keys(second_level_data).sort(
                function (a, b) {
                  return second_level_data[b] - second_level_data[a];
                }
              );
              second_value_sorted = Object.values(second_level_data).sort(
                function (a, b) {
                  return b - a;
                }
              );

              current_value_max = Math.max.apply(
                Math,
                Object.values(second_level_data)
              );
              current_value_min = Math.min.apply(
                Math,
                Object.values(second_level_data)
              );
              if (second_value_sorted.includes(".")) {
                isSupressed = true;
              } else {
                isSupressed = false;
              }
              let second_backgroundColor = generate_color(second_label_sorted);

              let second_json_data_sorted = second_json_data.sort(
                (a, b) =>
                  second_label_sorted.indexOf(a.properties.omr_namn) -
                  second_label_sorted.indexOf(b.properties.omr_namn)
              );
              for (let i = 0; i < second_json_data_sorted.length; i++) {
                omrade = second_json_data_sorted[i].properties.omr_namn;
                second_json_data_sorted[i].properties.value =
                  second_level_data[omrade];
              }
              simpleGeojson.addTo(mymap);

              simpleGeojson.eachLayer(function (layer) {
                if (layer.feature.properties.omr_namn == clickedOmrade) {
                  mymap.removeLayer(layer);
                }
              });

              secondjson = L.geoJson(second_json_data_sorted, {
                style: style_transparent,
                onEachFeature: onEachFeature,
              });
              secondjson.addTo(mymap);

              legend.remove();
              legend.addTo(mymap);
              currentjson = secondjson;
              // Add button
              goBackButton.addTo(mymap);

              //Add infoClicked
              infoClicked.addTo(mymap);
              infoClicked.update(clickedOmrade);

              //Update datasets on table
              barchart.config.data = {
                responsive: true,
                labels: second_label_sorted,
                datasets: [
                  {
                    label: "Värde",
                    data: second_value_sorted,
                    backgroundColor: generate_color(second_label_sorted),
                    borderColor: generate_color(second_label_sorted),
                    borderWidth: 1,
                    hoverBackgroundColor:
                      generate_hover_color(second_label_sorted),
                  },
                ],
              };
              barchart.update();
              mymap.fitBounds(secondjson.getBounds());
              tileLayer.addTo(mymap);
              isOnKommun = false;
            } else {
              if (e.target) {
                mymap.fitBounds(e.target.getBounds());
              } else {
                for (let [key, value] of Object.entries(currentjson._layers)) {
                  if (value.feature.properties.omr_namn == clickedOmrade) {
                    mymap.fitBounds(value.getBounds());
                    break;
                  }
                }
              }
            }
          }
        } else {
          function zoomToFeature(e) {
            if (e.target) {
              mymap.fitBounds(e.target.getBounds());
            } else {
              for (const [key, value] of Object.entries(currentjson._layers)) {
                if (
                  value.feature.properties.omr_namn ==
                  barchart.data.labels[e[0].index]
                ) {
                  mymap.fitBounds(value.getBounds());
                  break;
                }
              }
            }
          }
        }

        function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature,
          });
        }
        simpleGeojson = L.geoJson(stockholm_kommun_sorted, {
          style: simple_style,
        });

        geojson = L.geoJson(stockholm_kommun_sorted, {
          style: style,
          onEachFeature: onEachFeature,
        });
        geojson.addTo(mymap);
        isOnKommun = true;

        currentjson = geojson;
        legend = L.control({
          position: "bottomright",
        });

        legend.onAdd = function (map) {
          let div = L.DomUtil.create("div", "legend"),
            interval = (current_value_max - current_value_min) / 5;
          (grades = [
            current_value_min,
            current_value_min + 1 * interval,
            current_value_min + 2 * interval,
            current_value_min + 3 * interval,
            current_value_min + 4 * interval,
          ]),
            (labels = []);
          div.innerHTML +=
            '<h4 style = "text-align: center; font-weight: bold; margin : 0px 8px 8px 8px">Värde</h4>';

          // if there exists supressed value, add one more colored square op top
          if (isSupressed) {
            div.innerHTML +=
              '<i style="background: #D3D3D3; opacity: 0.85"></i> * <br>';
          }
          // loop through our density intervals and generate a label with a colored square for each interval
          for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
              '<i style="background:' +
              getColor(grades[i]) +
              '; opacity: 0.85"></i> ' +
              grades[i].toLocaleString("sv-SE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) +
              (grades[i + 1]
                ? "&ndash;" +
                  grades[i + 1].toLocaleString("sv-SE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) +
                  "<br>"
                : "+");
          }
          return div;
        };

        legend.addTo(mymap);

        function highlightFeatureFromBar(omr_namn) {
          if (omr_namn !== "Stockholms län" && omr_namn !== "Stockholm") {
            currentjson.eachLayer(function (layer) {
              if (layer.feature.properties.omr_namn == hovered_omr) {
                layer.setStyle({
                  weight: 3,
                  color: "#666",
                  dashArray: "",
                  fillOpacity: 1,
                });
                info.addTo(mymap);
                info.update(layer.feature.properties);

                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                  layer.bringToFront();
                }

                return;
              }
            });
          } else {
            if (omr_namn == "Stockholms län") {
              currentjson.eachLayer(function (layer) {
                layer.setStyle({
                  weight: 3,
                  color: "#666",
                  dashArray: "",
                  fillOpacity: 1,
                });
                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                  layer.bringToFront();
                }
              });
            } else {
              currentjson.eachLayer(function (layer) {
                if (
                  stadsdelarList.includes(layer.feature.properties.omr_namn)
                ) {
                  layer.setStyle({
                    weight: 3,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 1,
                  });
                  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    layer.bringToFront();
                  }
                }
              });
            }
          }
        }

        function resetHighlightFromBar(omr_namn) {
          currentjson.eachLayer(function (layer) {
            if (omr_namn !== "Stockholms län" && omr_namn !== "Stockholm") {
              currentjson.eachLayer(function (layer) {
                if (layer.feature.properties.omr_namn == hovered_omr) {
                  currentjson.resetStyle(layer);
                  info.remove();
                  return;
                }
              });
            } else {
              if (omr_namn == "Stockholms län") {
                currentjson.eachLayer(function (layer) {
                  currentjson.resetStyle(layer);
                });
              } else {
                currentjson.eachLayer(function (layer) {
                  currentjson.resetStyle(layer);
                });
              }
            }
          });
        }

        // For bar chart
        let previous_hovered_omr;
        let ctx = document.getElementById("karta_stapel").getContext("2d");
        barchart = new Chart(ctx, {
          type: "bar",
          data: {
            responsive: true,
            labels: first_label_sorted,
            datasets: [
              {
                label: "Värde",
                data: first_value_sorted.map(function (item) {
                  return item == "." ? null : item;
                }),
                backgroundColor: generate_color(first_label_sorted),
                borderColor: generate_color(first_label_sorted),
                borderWidth: 1,
                hoverBackgroundColor: generate_hover_color(first_label_sorted),
              },
            ],
          },
          plugins: [ChartDataLabels],
          options: {
            plugins: {
              datalabels: {
                formatter: function (value, context) {
                  if (value == null) {
                    return "*";
                  } else {
                    return value.toLocaleString("sv-SE", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    });
                  }
                },
                anchor: "end",
                align: "end",
                padding: {
                  left: 6,
                },
                clamp: true,
                font: {
                  size: 12,
                },
              },
              legend: false,
              tooltip: {
                backgroundColor: "#F8F9FA",
                bodyFont: {
                  size: 14,
                },
                bodyColor: "#000000",
                displayColors: false,
                titleColor: "#000000",
                titleFont: {
                  size: 14,
                },
                cornerRadius: 3,
                borderColor: "#000000",
                borderWidth: 0.5,

                callbacks: {
                  afterBody: function (t, d) {
                    return "Enhet: " + unit;
                  },
                  label: function (t, d) {
                    return (
                      "Värde: " +
                      (t.raw == null
                        ? "*"
                        : t.raw.toLocaleString("sv-SE", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }))
                    );
                  },
                },
              },
            },
            maintainAspectRatio: false,
            layout: {
              padding: {
                right: 40,
              },
            },
            indexAxis: "y",
            scales: {
              y: {
                ticks: {
                  autoSkip: false,
                  font: {
                    size: 11,
                  },
                },
                grid: {
                  display: false,
                },
              },
            },
            intersection: {
              mode: "point",
            },
            onHover: function (event, elements) {
              if (elements && elements.length) {
                // mouse over
                if (previous_hovered_omr == null) {
                  hovered_omr = event.chart.data.labels[elements[0].index];
                  highlightFeatureFromBar(hovered_omr);
                  previous_hovered_omr = hovered_omr;
                }
              } else {
                // mouse out
                if (previous_hovered_omr) {
                  resetHighlightFromBar(previous_hovered_omr);
                  previous_hovered_omr = null;
                }
              }
            },
            onClick: function (event, elements) {
              zoomToFeature(elements);
            },
          },
        });
      } else {
        //If the user already clicked on the mindre omrade level, the data would be refreshed and the map
        //will automatically be zommed to the clicked omrade.
        function getColor(d) {
          let interval = (current_value_max - current_value_min) / 5;
          return d == "."
            ? "#D3D3D3"
            : d >= current_value_min + 4 * interval
            ? "#297b7b"
            : d >= current_value_min + 3 * interval
            ? "#529494"
            : d >= current_value_min + 2 * interval
            ? "#7fb0b0"
            : d >= current_value_min + 1 * interval
            ? "#c3dada"
            : d >= current_value_min
            ? "#e2eded"
            : "#ffffff";
        }

        function style_transparent(feature) {
          return {
            fillColor: getColor(feature.properties.value),
            weight: 2,
            opacity: 1,
            color: "rgb(245, 243, 240, 0.8)",
            weight: 2,
            fillOpacity: 0.8,
          };
        }

        function highlightFeature(e) {
          let layer = e.target;

          layer.setStyle({
            weight: 3,
            color: "#666",
            dashArray: "",
            fillOpacity: 0.9,
          });

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
          }

          info.addTo(mymap);
          info.update(layer.feature.properties);

          barchart.setActiveElements([
            {
              datasetIndex: 0,
              index: barchart.data.labels.indexOf(
                layer.feature.properties.omr_namn
              ),
            },
          ]);
          barchart.tooltip.setActiveElements([
            {
              datasetIndex: 0,
              index: barchart.data.labels.indexOf(
                layer.feature.properties.omr_namn
              ),
            },
          ]);
          barchart.update("none");
        }

        function resetHighlight(e) {
          if (mymap.hasLayer(geojson)) {
            geojson.resetStyle();
          } else {
            if (mymap.hasLayer(secondjson)) {
              secondjson.resetStyle();
            }
          }
          info.remove();
          barchart.setActiveElements([]);
          barchart.tooltip.setActiveElements([]);
          barchart.update("none");
        }

        function zoomToFeature(e) {
          if (e.target) {
            mymap.fitBounds(e.target.getBounds());
          } else {
            for (const [key, value] of Object.entries(currentjson._layers)) {
              if (
                value.feature.properties.omr_namn ==
                barchart.data.labels[e[0].index]
              ) {
                mymap.fitBounds(value.getBounds());
                break;
              }
            }
          }
        }

        function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature,
          });
        }
        first_level_data = {};
        for (let i = 0; i < event_rows.length; i++) {
          if (firstLevelAreaList.includes(event_rows[i][2])) {
            if (first_level_data[event_rows[i][2]] == undefined) {
              first_level_data[event_rows[i][2]] = event_rows[i][1];
            } else {
              first_level_data[event_rows[i][2]] += event_rows[i][1];
            }
          }
        }
        for (let objectName in first_level_data) {
          if (first_level_data[objectName] != ".") {
            first_level_data[objectName] =
              Math.round(first_level_data[objectName] * 100) / 100;
          }
        }
        first_label_sorted = Object.keys(first_level_data).sort(function (
          a,
          b
        ) {
          return first_level_data[b] - first_level_data[a];
        });
        first_value_sorted = Object.values(first_level_data).sort(function (
          a,
          b
        ) {
          return b - a;
        });
        stockholm_kommun_sorted = stockholm_kommun.sort(
          (a, b) =>
            first_label_sorted.indexOf(a.properties.omr_namn) -
            first_label_sorted.indexOf(b.properties.omr_namn)
        );
        for (i = 0; i < stockholm_kommun_sorted.length; i++) {
          omrade = stockholm_kommun_sorted[i].properties.omr_namn;
          stockholm_kommun_sorted[i].properties.value =
            first_level_data[omrade];
        }
        first_backgroundColor = generate_color(first_label_sorted);

        second_level_data = {};
        for (i = 0; i < event_rows.length; i++) {
          if (second_label.includes(event_rows[i][2])) {
            second_level_data[event_rows[i][2]] = event_rows[i][1];
          }
        }
        for (let objectName in second_level_data) {
          if (second_level_data[objectName] != ".") {
            second_level_data[objectName] =
              Math.round(second_level_data[objectName] * 100) / 100;
          }
        }
        second_label_sorted = Object.keys(second_level_data).sort(function (
          a,
          b
        ) {
          return second_level_data[b] - second_level_data[a];
        });
        second_value_sorted = Object.values(second_level_data).sort(function (
          a,
          b
        ) {
          return b - a;
        });

        current_value_max = Math.max.apply(
          Math,
          Object.values(second_level_data)
        );
        current_value_min = Math.min.apply(
          Math,
          Object.values(second_level_data)
        );

        second_backgroundColor = generate_color(second_label_sorted);

        second_json_data_sorted = second_json_data.sort(
          (a, b) =>
            second_label_sorted.indexOf(a.properties.omr_namn) -
            second_label_sorted.indexOf(b.properties.omr_namn)
        );
        for (let i = 0; i < second_json_data_sorted.length; i++) {
          omrade = second_json_data_sorted[i].properties.omr_namn;
          second_json_data_sorted[i].properties.value =
            second_level_data[omrade];
        }
        secondjson.remove();
        secondjson = L.geoJson(second_json_data_sorted, {
          style: style_transparent,
          onEachFeature: onEachFeature,
        });
        secondjson.addTo(mymap);
        tileLayer.addTo(mymap);
        legend.remove();
        legend.addTo(mymap);
        currentjson = secondjson;
        barchart.config.data = {
          //Update the value in the barchart
          responsive: true,
          labels: second_label_sorted,
          datasets: [
            {
              label: "Värde",
              data: second_value_sorted.map(function (item) {
                return item == "." ? null : item;
              }),
              backgroundColor: generate_color(second_label_sorted),
              borderColor: generate_color(second_label_sorted),
              borderWidth: 1,
              hoverBackgroundColor: generate_hover_color(second_label_sorted),
            },
          ],
        };
        barchart.update();
      }
    }
    // Remove loading spinner for the map and the bar
    $("#titleSpinner").hide();
  }
});
