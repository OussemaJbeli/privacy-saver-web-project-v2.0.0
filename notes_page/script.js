/*************edite panel********** */
let open_edite = document.getElementById("card_note");
let close_edite = document.getElementById("close_img");
let note_body_add = document.getElementById("note_body_add");
let formulaire_panel = document.getElementById("formulaire_panel");
open_edite.addEventListener("click", enter_img);
close_edite.addEventListener("click", exite_img);

function enter_img(){
    note_body_add.style.visibility="visible";
    formulaire_panel.style.animation="open_login .2s linear forwards";
    note_containt_text.innerHTML="";
}
function exite_img(){
    note_body_add.style.visibility="hidden";
    formulaire_panel.style.animation="close_login .2s linear forwards";
}
/*****************add notes**************** */
/************get values from fild******* */
let note_containt_text = document.getElementById("note_containt_text");
/*****add****** */
let count = 3;
let add_button = document.getElementById("add");
add_button.addEventListener("click",verif);
function verif(){
        let note_text = note_containt_text.value;
        note_body_add.style.visibility="hidden";
        formulaire_panel.style.animation="close_login .2s linear forwards";
        //create item
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class","card"); 
        newDiv.setAttribute("id",count); 
        count++;
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
        //3abbi item
        newDiv.innerHTML=`
                            <div class="containt_note">
                                <p>${note_text}</p>
                            </div>
                            <div class="disc_card">
                                <span>date</span>
                                <span id="date_note">${date_text}</span>
                            </div>
        `;
        //puch item
        cardes.appendChild(newDiv);
        //access *improtenet*
        let ditails_formulaire_panel = document.getElementById("ditails_formulaire_panel");
        // Get all elements with class "card"
        let card = document.querySelectorAll(".card");
        // Add a click event listener to each card
        card.forEach(image => {
            image.addEventListener("click", () => {
                let id = image.getAttribute("id");
                details.style.visibility="visible";
                ditails_formulaire_panel.style.animation="open_ditails .2s linear forwards";
            });
        });
        let ditails_close_img = document.getElementById("ditails_close_img");
        ditails_close_img.addEventListener("click", exite_img_details);
        function exite_img_details(){
            details.style.visibility="hidden";
            ditails_formulaire_panel.style.animation="close_login .2s linear forwards";
        }
}
/*****************select cards for ditails********************** */

let ditails_formulaire_panel = document.getElementById("ditails_formulaire_panel");
let details = document.getElementById("ditails_panel");
// Get all elements with class "card"
let card = document.querySelectorAll(".card");
// Add a click event listener to each card
card.forEach(image => {
    image.addEventListener("click", () => {
        details.style.visibility="visible";
        ditails_formulaire_panel.style.animation="open_ditails .2s linear forwards";
    });
});
let ditails_close_img = document.getElementById("ditails_close_img");
ditails_close_img.addEventListener("click", exite_img_details);
function exite_img_details(){
    details.style.visibility="hidden";
    ditails_formulaire_panel.style.animation="close_login .2s linear forwards";
}