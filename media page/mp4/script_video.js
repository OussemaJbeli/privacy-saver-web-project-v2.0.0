/////////////////panel
let panel = document.getElementById("panel");
let panel_haed = document.getElementById("stor_by");
let panel_videos = document.getElementById("card_videos");
let panel_video = document.getElementById("card");
let title = document.getElementById("title_card");
let player_panel = document.getElementById("video_player");
let player = document.getElementById("player");
let prop = document.getElementById("prop");
/////////////////player

/****function**** */
var table = document.getElementById("tab");
var rowId;
table.addEventListener("click", function(event) {
    // Get the id of the clicked row
    rowId = event.target.parentNode.getAttribute("id");
    //posion panel
    panel_videos.style.width="27%";
    panel_haed.style.paddingLeft="7%";
    panel.style.alignItems="end";
    player_panel.style.visibility="visible";
    /***get/set */
    let link=`videos/${rowId}`;
    player.setAttribute("src",link);
});
/////////////////select
const fileInput = document.getElementById('shoser');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileSize = file.size;
    var sizeMB = (fileSize/1048576).toFixed(2);
    /***date* */
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let time_txt = `${h}:${m}`;
    let zoneDtae;
    if(h<12)
        zoneDtae = "AM";
    else
        zoneDtae = "PM";
    let date_text = `${day}/${month}/${year} - ${time_txt}${zoneDtae}`;
    var rowCount = table.rows.length;
    var row = table.insertRow(length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=`<tr>
                        <td>
                            <div class="card" id="${fileName}">
                                <video>
                                    <source class="img_vid" src="videos/${fileName}" type="video/mp4">
                                </video>
                                <div class="prop_contain">
                                    <p class="title_card" id="title_card">${fileName}</p>
                                    <div class="prop" id="prop">
                                        <span >${date_text}</span>
                                        <span >${sizeMB}MB</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>`;
});