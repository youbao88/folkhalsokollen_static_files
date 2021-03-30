//Disable animation and set the background of loading page to transparent
var styles = `
    .sas_ReportContainer-internal-SlideTransition_container {
        animation-duration: 0s !important;
    }
    .sas_components-Pane-Pane_pane {
        --pane-bg: transparent !important;
    }
`;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

var previous_canvases_id = [];

function disableScrollDoubleClickOutline() {
    var canvases = document.getElementsByTagName('canvas');
    var i
    for (i = 0; i < canvases.length; i++) {
        //Stop double click function
        canvases[i].addEventListener("dblclick", function (event) {
            event.stopPropagation();
        }, true);
        //Disable the outline
        canvases[i].style.outline = "none";
    }

    //Detect those canvases that are not existed in the previous canvases
    var _previous_canvases_id = [];
    var curr_canvases_index = []
    for (i = 0; i < canvases.length; i++) {
        if (previous_canvases_id.indexOf(canvases[i].getAttribute('id')) == -1) {
            curr_canvases_index.push(i);
            _previous_canvases_id.push(canvases[i].getAttribute('id'));
        }
    }
    //Stop wheel function
    if (curr_canvases_index.length != 0) {
        canvases[curr_canvases_index[curr_canvases_index.length - 1]].addEventListener('wheel', function (event) {
            event.stopPropagation();
        }, true);
        previous_canvses_id = _previous_canvases_id;
    }
    //Disable the outline for selection boxes
    var selectionBoxes = document.getElementsByClassName("sas_components-Select-Select_select sas_components-Select-Select_focus-visible");
    if (selectionBoxes.length != 0) {
        for (i = 0; i < selectionBoxes.length; i++) {
            selectionBoxes[i].style.outline = "none";
        }
    }
    //Disable the outline for text link
    var textLink = document.getElementsByClassName("sas_BirdText-BirdText_bird-text-link");
    if (textLink.length != 0) {
        for (i = 0; i < textLink.length; i++) {
            textLink[i].style.outline = "none";
        }
    }
    //Disable the outline for bird text 
    var birdText = document.getElementsByClassName("sas_BirdText-BirdText_text");
    if (birdText.length != 0) {
        for (i = 0; i < birdText.length; i++) {
            birdText[i].style.outline = "none";
        }
    }
}
window.addEventListener('vaReportComponents.loaded', function () {
    var sasReport = document.getElementById("my-report");
    //disable the right-click function
    sasReport.addEventListener("contextmenu", function (event) {
        event.stopPropagation();
    }, true);

    // var currentUrl = 'https://prod14.slso.sll.se/analysverktyg/?id=138425';
    var currentUrl = window.location.href;
    var UrlId = currentUrl.match(/.+id=(\d+).*/)[1];

    sasReport.getReportHandle().then((reportHandle) => {
        reportHandle.updateReportParameters(indicator_init_map[id_indicaotr[UrlId]]);
    });
    //Receive data from two iframes;
    var currentIndicator = null;
    var iframe_title_div_innerHTML
    window.addEventListener('message', (event) => {
        disableScrollDoubleClickOutline();
        if (event.data.startsWith('http')) { //if the data is a link
            var win = window.open(event.data, '_blank');
            win.focus();
        } else if (event.data.startsWith('<span')) { //if the data is a span div
            iframe_title_div_innerHTML = event.data;
        } else {
            var newIndicator = event.data;
            if (currentIndicator == null) {
                currentIndicator = newIndicator;
            } else if (currentIndicator != newIndicator) {
                sasReport.getReportHandle().then(reportHandle => {
                    var parameters = indicator_name_parameter_map[newIndicator];
                    reportHandle.updateReportParameters(parameters);
                });
                currentIndicator = newIndicator;
            }
        }
    });
    // This is the js script for downloading the report as Image from browser
    document.getElementsByTagName("sas-report")[0].addEventListener("click", e => {
        if (e.target.title ==
            "Klicka här för att spara en bild av din visualisering. Bilden laddas ned som en jpg-fil på din dator."
        ) {
            var iframe_title_div = document.createElement('div');
            iframe_title_div.innerHTML = iframe_title_div_innerHTML;
            document.body.appendChild(iframe_title_div);
            html2canvas(iframe_title_div, {
                width: 700,
                height: 200,
                scale: 1.5,
                backgroundColor: null
            }).then(function (title_canvas) {
                var export_canvas = document.createElement('canvas');
                var figure_canvases = document.getElementsByTagName('canvas');
                var ctx;
                if (figure_canvases.length == 2) { //two visualizations on the page
                    //Configure the width and height of export canvas
                    export_canvas.width = figure_canvases[0].width + figure_canvases[1].width;
                    export_canvas.height = title_canvas.height + Math.max(figure_canvases[0].height, figure_canvases[1].height);

                    ctx = export_canvas.getContext('2d');

                    ctx.drawImage(title_canvas, 0, 0);
                    ctx.drawImage(figure_canvases[0], 0, title_canvas.height + 1);
                    ctx.drawImage(figure_canvases[1], figure_canvases[0].width + 1, title_canvas.height + 1);
                } else if (figure_canvases.length == 1) { //one visualization on the page
                    export_canvas.width = figure_canvases[0].width;
                    export_canvas.height = title_canvas.height + figure_canvases[0].height;
                    ctx = export_canvas.getContext('2d');

                    ctx.drawImage(title_canvas, 0, 0);
                    ctx.drawImage(figure_canvases[0], 0, title_canvas.height + 1);
                }
                var dataURL = export_canvas.toDataURL(type = 'image/png');
                var a = document.createElement("a");
                a.href = dataURL;
                a.download = "Bild Folkhälsokollen";
                a.click();

                // Clear canvas
                ctx.clearRect(0, 0, export_canvas.width, export_canvas.height);
            });
            document.body.removeChild(iframe_title_div);
        }
    });
});