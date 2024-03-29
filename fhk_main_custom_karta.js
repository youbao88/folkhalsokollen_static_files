document.addEventListener("DOMContentLoaded", function (event) {
    //Disable animation and set the background of loading page to transparent
    var styles = `
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
    .help_icon{
        opacity:0.8 !important;
    }
    .help_icon:hover{
        opacity: 1.0 !important;
        border: 1px solid #f5f3f0 !important;
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
`;
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);


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
            //Stop wheel function
            canvases[i].addEventListener("wheel", function (event) {
                event.stopPropagation();
            }, true);
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
        //Add hover effect to the icons
        var icons = document.getElementsByClassName('sas_components-Image-Image_clickable sas_components-Image-Image_scale sas_components-Image-Image_span')
        for (i = 0; i < icons.length; i++) {
            if (icons[i].title == "Hjälp") {
                icons[i].parentNode.parentNode.parentNode.classList.add("help_icon");
            } else {
                var icon_div = icons[i].parentNode.parentNode.parentNode.parentNode;
                if (icon_div.style.backgroundColor != "rgb(233, 236, 239)") {
                    icon_div.classList.add("tab_icon");
                }
            }
        }
    }
    window.addEventListener('vaReportComponents.loaded', function () {

        var sasReport = document.getElementById("my-report");
        var stapelCurrentOmrade = 'Stockholms län';
        var defaultOmradeWhenIndicatorChanged = {};


        observer_change_indicator = new MutationObserver(mutationRecords => {
            sasReport.getReportHandle().then(reportHandle => {
                var newIndicator = document.querySelector('[aria-controls="sas_RC-Dropdown-list-1"]').getElementsByClassName('sas_components-Select-Select_label')[0].innerText;
                var _parameters = indicator_name_parameter_map[newIndicator];
                var parameters = {}
                for (let i in _parameters) {
                    Object.assign(parameters, _parameters[i]);
                }
                Object.assign(parameters, defaultOmradeWhenIndicatorChanged);
                reportHandle.updateReportParameters(parameters);
            });
        })

        var loading_replaced = false;
        var observer_loading = new MutationObserver(mutationRecords => {
            var sasLoadingDiv = document.getElementsByClassName('sas_components-BusyStateIndicator-BusyStateIndicator_state');
            if (sasLoadingDiv && loading_replaced == false) {
                loading_replaced = true;
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
                    <div class='loading-text'>webbverktyget laddas...</div>
                    <div class='loading-tip'>
                        <p class="first-line fade-in">Använd webbverktyget från en dator eller surfplatta. För att garantera att det visas på bästa sätt rekommenderar vi webbläsarna Microsoft Edge (alla versioner), Firefox 12, Google chrome 19, Internet explorer 10, Safari 5.1 eller senare versioner av dessa.</p>
                    </div>
                </div>
            `
            }
            var indicator_control = document.querySelector('[aria-controls="sas_RC-Dropdown-list-1"]')
            if (indicator_control) {
                observer_change_indicator.observe(indicator_control.getElementsByClassName('sas_components-Select-Select_label')[0], {
                    characterData: true,
                    attributes: false,
                    childList: false,
                    subtree: true
                })
                observer_loading.disconnect();
            }

        })

        observer_loading.observe(sasReport, {
            childList: true,
            subtree: true
        });

        //disable the right-click function
        sasReport.addEventListener("contextmenu", function (event) {
            event.stopPropagation();
        }, true);

        //update indicator when firstly open the report
        var currentUrl = window.location.href;
        var UrlId = currentUrl.match(/.+id=(\d+).*/);

        if (UrlId != null && UrlId[1] in id_indicator) {
            sasReport.getReportHandle().then((reportHandle) => {
                reportHandle.updateReportParameters(indicator_init_map[id_indicator[UrlId[1]]]);
            });
        } else {
            sasReport.getReportHandle().then((reportHandle) => {
                reportHandle.updateReportParameters(indicator_init_map["Arbetsmiljö"]);
            });
        }

        //Receive data from two iframes;
        var iframe_title_div_innerHTML
        window.addEventListener('message', (event) => {
            disableScrollDoubleClickOutline();
            if (typeof (event.data) == 'object') {
                switch (event.data.type) {
                    case "openUrl":
                        var win = window.open(event.data.content, '_blank');
                        win.focus();
                        break;
                    case "changeParameter":
                        sasReport.getReportHandle().then((reportHandle) => {
                            reportHandle.updateReportParameters(event.data.content);
                        });
                        break;
                    case "screenshotInfo":
                        iframe_title_div_innerHTML = event.data.content["title_div"];
                        var menus = document.querySelectorAll("[aria-haspopup='listbox']");
                        menus.forEach(element => {
                            if (element.innerText in event.data.content) {
                                var menuName = element.innerText;
                                element.querySelector(".sas_components-Select-Select_label").innerText = event.data.content[element.innerText];
                                element.setAttribute("title", menuName);
                            } else if (element.getAttribute("title") in event.data.content) {
                                element.querySelector(".sas_components-Select-Select_label").innerText = event.data.content[element.getAttribute("title")];
                            }
                        })
                        break;
                    case "defaultOmradeChanged":
                        var rx = /(.+)_.+/g;
                        var omrade_page = rx.exec(Object.keys(event.data.content)[0])[1]
                        switch (omrade_page) {
                            case "stapel":
                                stapelCurrentOmrade = Object.values(event.data.content)[0];
                                sasReport.getReportHandle().then((reportHandle) => {
                                    reportHandle.updateReportParameters({
                                        'linje_Område': ['Stockholms län', Object.values(event.data.content)[0]],
                                        'table_Område': ['Stockholms län', Object.values(event.data.content)[0]]
                                    });
                                });
                                defaultOmradeWhenIndicatorChanged['stapel_Område'] = Object.values(event.data.content)[0];
                                defaultOmradeWhenIndicatorChanged['linje_Område'] = ['Stockholms län', Object.values(event.data.content)[0]]; 
                                defaultOmradeWhenIndicatorChanged['table_Område'] = ['Stockholms län', Object.values(event.data.content)[0]]; 
                                break;
                            case "linje":
                                parameterTobeChanged = {}
                                parameterTobeChanged['table_Område'] = Object.values(event.data.content)[0];
                                defaultOmradeWhenIndicatorChanged['linje_Område'] = Object.values(event.data.content)[0];
                                defaultOmradeWhenIndicatorChanged['table_Område'] = Object.values(event.data.content)[0]; 
                                if (!(Object.values(event.data.content)[0].includes(stapelCurrentOmrade))) {
                                    parameterTobeChanged['stapel_Område'] = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1];
                                    defaultOmradeWhenIndicatorChanged['stapel_Område'] = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1]; 
                                    stapelCurrentOmrade = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1];
                                }
                                sasReport.getReportHandle().then((reportHandle) => {
                                    reportHandle.updateReportParameters(parameterTobeChanged);
                                });
                                break;
                            case "table":
                                parameterTobeChanged = {}
                                parameterTobeChanged['linje_Område'] = Object.values(event.data.content)[0];
                                defaultOmradeWhenIndicatorChanged['table_Område'] = Object.values(event.data.content)[0]; 
                                defaultOmradeWhenIndicatorChanged['linje_Område'] = Object.values(event.data.content)[0]; 
                                if (!(Object.values(event.data.content)[0].includes(stapelCurrentOmrade))) {
                                    parameterTobeChanged['stapel_Område'] = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1];
                                    defaultOmradeWhenIndicatorChanged['stapel_Område'] = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1];
                                    stapelCurrentOmrade = Object.values(event.data.content)[0][Object.values(event.data.content)[0].length - 1];
                                }
                                sasReport.getReportHandle().then((reportHandle) => {
                                    reportHandle.updateReportParameters(parameterTobeChanged);
                                });
                                break;
                        }

                        case "screenshotKarta":
                            var kartaImage = new Image();
                            var stapelImage = new Image();
                            var imagesLoaded = 0

                            function createKartaScreenShot() {

                                export_canvas = document.createElement('canvas');

                                export_canvas.width = kartaImage.width + stapelImage.width;
                                export_canvas.height = 150 + Math.max(kartaImage.height, stapelImage.height);

                                ctx = export_canvas.getContext('2d');

                                ctx.drawImage(kartaImage, 0, 150);
                                ctx.drawImage(stapelImage, kartaImage.width, 150);

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
                            }

                            kartaImage.onload = function () {
                                imagesLoaded++;
                                if (imagesLoaded == 2) {
                                    createKartaScreenShot()
                                }
                            }

                            stapelImage.onload = function () {
                                imagesLoaded++;
                                if (imagesLoaded == 2) {
                                    createKartaScreenShot()
                                }
                            }

                            kartaImage.src = event.data.content.karta;
                            stapelImage.src = event.data.content.stapel;

                            break;
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
                if (figure_canvases.length != 0) { //Get image data from SAS VA SDK 
                    export_canvas.width = figure_canvases[0].width;
                    export_canvas.height = 150 + figure_canvases[0].height;
                    ctx = export_canvas.getContext('2d');

                    ctx.drawImage(figure_canvases[0], 0, 150);
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
                } else { //Get image data from iframe
                    document.getElementsByTagName('iframe')[2].contentWindow.postMessage(message = {
                        'type': 'takeScreenShot'
                    }, targetOrigin = '*')
                }
            } else if (e.target.title == 'Hjälp') {
                window.open(
                    'https://www.folkhalsokollen.se/sa-har-gor-du/', "_blank");
            }
        });
    });
})