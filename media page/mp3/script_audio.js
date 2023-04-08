/////////////////player
let audio_player = document.getElementById("audio_pl");
let audio_player_pan = document.getElementById("audio_player");
/****function**** */
var table = document.getElementById("tab");
var rowId;
table.addEventListener("click", function(event) {
    // Get the id of the clicked row
    rowId = event.target.parentNode.getAttribute("id");
    //posion panel
    audio_player_pan.style.visibility="visible";
    /***get/set */
    let link=`music/${rowId}`;
    audio_player.setAttribute("src",link);
});

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

    var row = table.insertRow(length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=`<tr>
                        <td>
                            <div class="card" id="${fileName}">
                                <span class="img"></span>
                                <div class="prop_contain">
                                    <p class="title_card">${fileName}</p>
                                    <div class="prop">
                                        <span >${date_text}</span>
                                        <span >${sizeMB}MB</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>`;
});
