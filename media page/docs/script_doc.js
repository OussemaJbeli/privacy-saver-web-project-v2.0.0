let card_videos = document.getElementById("card_videos");
/*******add */
const fileInput = document.getElementById('shoser');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileSize = file.size;
    var sizeMB = (fileSize/1048576).toFixed(3);
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
    
    //create item
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id",fileName);
    newDiv.setAttribute("class","card"); 
    /****choose type */
    function getFileExtension(fileName) {
        return fileName.split('.').pop();
    }
    let extension = getFileExtension(fileName);
    let type_file_icon;
    switch (extension)
    {
        case "pdf": type_file_icon="../icon/doc/pdf.png";break;
        case "doc": type_file_icon="../icon/doc/word.png";break;
        case "docx": type_file_icon="../icon/doc/word.png";break;
        case "html": type_file_icon="../icon/doc/html.png";break;
        case "css": type_file_icon="../icon/doc/css.png";break;
        case "zip": type_file_icon="../icon/doc/zip.png";break;
        case "rar": type_file_icon="../icon/doc/rar.png";break;
        case "txt": type_file_icon="../icon/doc/txt.png";break;
        default: type_file_icon="../icon/doc/doc.png";break;
    }
    //3abbi item
    newDiv.innerHTML=`  <div class="image">
                            <img src="${type_file_icon}" alt="not found">
                        </div>
                        <div class="prop_contain">
                            <p class="title_card">${fileName}</p>
                            <div class="prop">
                                <div class="type">
                                    <span span id="titles">Item Type</span>
                                    <span >${extension} File</span>
                                </div>
                                <div class="size">
                                    <span span id="titles">Size</span>
                                    <span >${sizeMB}MB</span>
                                </div>
                                <div class="date">
                                    <span span id="titles">token date</span>
                                    <span >${date_text}</span>
                                </div>
                            </div>
                        </div>`;
    //puch item
    card_videos.appendChild(newDiv);
});