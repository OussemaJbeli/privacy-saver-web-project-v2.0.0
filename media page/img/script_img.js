//img player
let panel_img = document.getElementById("image_player");
let exite = document.getElementById("exite");
let image_player = document.getElementById("image");
let card_videos = document.getElementById("card_videos");
// Get all elements with class "card"
let buttons = document.querySelectorAll(".card");
let a = 1;
console.log(a);
// Add a click event listener to each card
buttons.forEach(image => {
    image.addEventListener("click", () => {
        console.log(a);
        let id = image.getAttribute("id");
        panel_img.style.visibility="visible";
        /*
        ****access to element */
        let link = `img/${id}`;
        image_player.setAttribute("src",link);
    });
});
/*****exite */
exite.addEventListener("click",exit);
function exit(){
    panel_img.style.visibility="hidden";
}
/*******add */
const fileInput = document.getElementById('shoser');
fileInput.addEventListener('change', (event) => {
    a = 3;
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
    //create item
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id",fileName);
    newDiv.setAttribute("class","card"); 
    //3abbi item
    newDiv.innerHTML=`  <img src="img/${fileName}" alt="not found">
                        <div class="prop_contain">
                            <p class="title_card">${fileName}</p>
                            <div class="prop">
                                <span >${date_text}</span>
                                <span >${sizeMB}MB</span>
                            </div>
                        </div>`;
    //puch item
    card_videos.appendChild(newDiv);
    let buttons = document.querySelectorAll(".card");
    // Add a click event listener to each button
    buttons.forEach(image => {
        image.addEventListener("click", () => {
            console.log(a);
            let id = image.getAttribute("id");
            panel_img.style.visibility="visible";
            /*
            ****access to element */
            let link = `img/${id}`;
            image_player.setAttribute("src",link);
        });
    });
});