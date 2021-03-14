//Disable animation
var styles = `
    .sas_ReportContainer-internal-SlideTransition_container {
        animation-dcd veuration: 0s !important;
    }
    HoverEffect:hover{
        background-color: black;
    }
`;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function disableScrollDoubleClickOutline() {
    let canvases = document.getElementsByTagName('canvas');
    if (canvases.length != 0) {
        for (i = 0; i < canvases.length; i++) {
            //Stop double click function
            canvases[i].addEventListener("dblclick", function (event) {
                event.stopPropagation();
            }, true);
            //Disable the outline
            canvases[i].style.outline = "none";
        }
        //Stop wheel function
        canvases[canvases.length - 1].addEventListener('wheel', function (event) {
            event.stopPropagation();
        }, true);
    };
    //Disable the outline for selection boxes
    let selectionBoxes = document.getElementsByClassName("sas_components-Select-Select_select sas_components-Select-Select_focus-visible");
    if (selectionBoxes.length != 0) {
        for (i = 0; i < selectionBoxes.length; i++) {
            selectionBoxes[i].style.outline = "none";
        }
    }
    //Disable the outline for text link
    let textLink = document.getElementsByClassName("sas_BirdText-BirdText_bird-text-link")
    if (textLink.length != 0) {
        for (i = 0; i < textLink.length; i++) {
            textLink[i].style.outline = "none";
        }
    }
    //Disable the outline for bird text 
    let birdText = document.getElementsByClassName("sas_BirdText-BirdText_text")
    if (birdText.length != 0) {
        for (i = 0; i < birdText.length; i++) {
            birdText[i].style.outline = "none";
        }
    }
    // //
    // var previousIndicatorName = null;
    // let titleiframe = document.getElementsByTagName("iframe");
    // console.log(titleiframe.contentWindow.document);
    // if (indicatorName != null){
    //     if (previousIndicatorName == null || previousIndicatorName == indicatorName){
    //         previousIndicatorName = indicatorName;
    //     }else{
    //         console.log('Indicator name change');
    //     }
    // }
};
const observer = new MutationObserver(mutations => {
    disableScrollDoubleClickOutline();
});
window.addEventListener('vaReportComponents.loaded', function () {
    const sasReport = document.getElementById("my-report");
    //disable the right-click function
    sasReport.addEventListener("contextmenu", function (event) {
        event.stopPropagation();
    }, true);

    sasReport.getReportHandle().then((reportHandle) => {
        reportHandle.setReportParameters({
            indikator_group_selection: "Äldre",
            indikator_name_selection: "Fallolyckor",
            indikator_category_selection: "Ej valbart",
            karta_Tidsperiod: "2018",
            karta_Kön: ["Kvinnor", "Män"],
            karta_Åldersgrupp: "65+ år",
            stapel_Område: "Stockholms län",
            stapel_Tidsperiod: "2018",
            stapel_Kön: ["Kvinnor", "Män"],
            linje_Område: ["Stockholms län", "Botkyrka"],
            linje_Kön: ["Kvinnor", "Män"],
            linje_Åldersgrupp: "65+ år",
            table_Tidsperiod: "2018",
            table_Område: "Stockholms län",
            tabel_Åldersgrupp: "65+ år",
            tabel_Kön: ["Kvinnor", "Män"]
        });
    });
    // Observe on the sas-report if there is any changes
    observer.observe(target = sasReport, {
        attributes: true,
        subtree: true
    })

})

// This is the js script for downloading the report as Image from browser
document.getElementsByTagName("sas-report")[0].addEventListener("click", e => {
    if (e.target.title ==
        "Klicka här för att spara en bild av din visualisering. Bilden laddas ned som en jpg-fil på din dator."
    ) {
        const canvases = document.getElementsByTagName('canvas');
        for (var i = 0; i < canvases.length; i++) {
            try {
                dataURL = canvases[i].toDataURL(type = "image/png");
            } catch {
                continue;
            }
            const a = document.createElement("a");
            a.href = dataURL;
            a.download = "Folkhalsokollen_report.png";
            a.click();
        }
    }
})
//Detect the change of indicatorname and change default selection;
var currentIndicator = null;
window.addEventListener('message', (event) => {
    var newIndicator = event.data;
    if (currentIndicator == null) {
        currentIndicator = newIndicator;
    } else if (currentIndicator != newIndicator) {

        currentIndicator = newIndicator
    }
})