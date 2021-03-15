//Disable animation
var styles = `
    .sas_ReportContainer-internal-SlideTransition_container {
        animation-duration: 0s !important;
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

    var currentUrl = window.location.href;
    var UrlId = currentUrl.match(/.+id=(\d+).*/)[1];

    sasReport.getReportHandle().then((reportHandle) => {
        reportHandle.setReportParameters(indicator_init_map[id_indicaotr[UrlId]]);
    });
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
        if (event.data.startsWith('http')) {
            var win = window.open(event.data, '_blank');
            win.focus;
        } else {
            var newIndicator = event.data;
            if (currentIndicator == null) {
                currentIndicator = newIndicator;
            } else if (currentIndicator != newIndicator) {
                sasReport.getReportHandle().then(reportHandle => {
                    var parameters = indicator_name_parameter_map[newIndicator];
                    reportHandle.updateReportParameters(parameters);
                })
                currentIndicator = newIndicator;
            }
        }
    })
    // Observe on the sas-report if there is any changes
    observer.observe(target = sasReport, {
        attributes: true,
        subtree: true
    })

})