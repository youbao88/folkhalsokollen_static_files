//Disable animation and set the background of loading page to transparent
var styles = `
    .sas_ReportContainer-internal-SlideTransition_container {
        animation-duration: 0s !important;
    }
    .sas_components-Pane-Pane_pane {
        --pane-bg: transparent !important;
    }
            .lds-ring {
            display: block;
            width: 80px;
            height: 80px;
            margin: auto
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

        .animation-box {
            width: 75%;
            height: 30rem;
            background-color: darkblue;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }

        @keyframes fadeInOut {
            0% {
                opacity: 0;
            }

            2% {
                opacity: 0;
            }

            5% {
                opacity: 1;
            }

            17% {
                opacity: 1;
            }

            19% {
                opacity: 1;
            }

            24% {
                opacity: 0;
            }

            80% {
                opacity: 0;
            }

            100% {
                opacity: 0;
            }
        }

        .animation-box h1 {
            position: absolute;
            left: 5%;
            top: 0;
            font-size: 4em;
            color: white;
            font-weight: 400;
        }

        .first-line,
        .second-line,
        .third-line,
        .fourth-line {
            font-size: 3rem;
            font-family: Arial, Helvetica, sans-serif;
            position: absolute;
            opacity: 0;
            animation-name: fadeInOut;
            animation-iteration-count: infinite;
            width: 100%;
            text-align: center;
            margin-top: 100px;
        }

        .first-line {
            animation-duration: 32s;
        }

        .second-line {
            animation-delay: 8s;
            animation-duration: 32s;
        }

        .third-line {
            animation-delay: 16s;
            animation-duration: 32s;
        }

        .fourth-line {
            animation-delay: 24s;
            animation-duration: 32s;
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
            margin: auto;
        }
`;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

var previousIsKarta = null;

function disableScrollDoubleClickOutline() {
    var canvases = Array.from(document.getElementsByTagName('canvas'));
    var i
    for (i = 0; i < canvases.length; i++) {
        //Stop double click function
        canvases[i].addEventListener("dblclick", function (event) {
            event.stopPropagation();
        }, true);
        //Disable the outline
        canvases[i].style.outline = "none";
    }

    //Stop wheel function
    if (canvases.length != 0) {
        var canvases_sorted = canvases.sort((a, b) => (a.id < b.id) ? 1 : -1)
        if (previousIsKarta === null) { //When user firstly open the page
            canvases_sorted[0].addEventListener("wheel", function (event) {
                event.stopPropagation();
            }, true);
            previousIsKarta = true;
        } else if (canvases.length == 1) {
            canvases[0].addEventListener("wheel", function (event) {
                event.stopPropagation();
            }, true);
            previousIsKarta = false;
        } else if (previousIsKarta === true) {
            canvases_sorted[0].addEventListener("wheel", function (event) {
                event.stopPropagation();
            }, true);
            previousIsKarta = false
        } else {
            if (canvases_sorted.length == 2) {
                canvases_sorted[0].addEventListener("wheel", function (event) {
                    event.stopPropagation();
                }, true);
                previousIsKarta = false
            } else {
                canvases_sorted[0].addEventListener("wheel", function (event) {
                    event.stopPropagation();
                }, true);
                previousIsKarta = true
            }
        }
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

    var observer = new MutationObserver(mutationRecords => {
        console.log(mutationRecords)
        var sasLoadingDiv = document.getElementsByClassName('sas_components-BusyStateIndicator-BusyStateIndicator_state');
        if (sasLoadingDiv){
            sasLoadingDiv[0].style.visibility = "hidden";
            var sasMainPanel = document.getElementsByClassName('sas_components-Pane-Pane_pane')[0];
            var customLoadingDiv = sasMainPanel.appendChild(document.createElement('div'));
            customLoadingDiv.setAttribute('id', 'customLoadingDiv');
            customLoadingDiv.innerHTML = `
                <div class='loading screen'>
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class='loading-text'>Läser in...</div>
                    <div class='loading-tip'>
                        <p class="first-line">This is your last chance. After this, there is no turning back.</p>

                        <p class="second-line">You take the blue pill - the story ends, you wake up in your bed and believe
                            whatever you want to believe.</p>

                        <p class="third-line">You take the red pill - you stay in Wonderland and I show you how deep the
                            rabbit-hole goes.</p>
                        <p class="fourth-line">Remember: all I'm offering is the truth. Nothing more.</p>
                    </div>
                </div>
            `
            observer.disconnect();
        }
    })

    observer.observe(sasReport, {
        childList: true,
        subtree: true
    });

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
                    reportHandle.setReportParameters(parameters);
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

            var export_canvas = document.createElement('canvas');
            var figure_canvases = document.getElementsByTagName('canvas');
            var ctx;
            if (figure_canvases.length == 2) { //two visualizations on the page
                //Configure the width and height of export canvas
                export_canvas.width = figure_canvases[0].width + figure_canvases[1].width;
                export_canvas.height = 150 + Math.max(figure_canvases[0].height, figure_canvases[1].height);

                ctx = export_canvas.getContext('2d');

                ctx.drawImage(figure_canvases[0], 0, 150);
                ctx.drawImage(figure_canvases[1], figure_canvases[0].width, 150);
            } else if (figure_canvases.length == 1) { //one visualization on the page
                export_canvas.width = figure_canvases[0].width;
                export_canvas.height = 150 + figure_canvases[0].height;
                ctx = export_canvas.getContext('2d');

                ctx.drawImage(figure_canvases[0], 0, 150);
            }

            var title_lines = iframe_title_div_innerHTML.split('<br>')
            start_y_position = 31
            for (i = 0; i < title_lines.length; i++) {
                var line_span = title_lines[i].match(/<.*?\/span>/gm);
                var line_text = "";
                for (var j = 0; j < line_span.length; j++) {
                    line_text = line_text.concat(line_span[j].match(/.*>(.+)</m)[1]);
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
            var dataURL = export_canvas.toDataURL(type = 'image/png');
            var a = document.createElement("a");
            a.href = dataURL;
            a.download = "Bild Folkhälsokollen";
            a.click();

            // Clear canvas
            ctx.clearRect(0, 0, export_canvas.width, export_canvas.height);
        } else if (e.target.title == 'Hjälp') {
            window.open(
                "https://prod14.slso.sll.se/sa-har-gor-du/", "_blank");
        }
    });
});