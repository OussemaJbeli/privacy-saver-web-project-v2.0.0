let open_img = document.getElementById("card_login");
let close_img = document.getElementById("close_img");
let login = document.getElementById("login_panel");
let details = document.getElementById("ditails_panel");
let cardes = document.getElementById("cardes");
let formulaire_panel = document.getElementById("formulaire_panel");
open_img.addEventListener("click", enter_img);
close_img.addEventListener("click", exite_img);


function enter_img(){
    login.style.visibility="visible";
    formulaire_panel.style.animation="open_login .2s linear forwards";
}
function exite_img(){
    login.style.visibility="hidden";
    formulaire_panel.style.animation="close_login .2s linear forwards";
}
/************get values from filds******* */
let cat = document.getElementById("cat");
let user = document.getElementById("user");
let mail = document.getElementById("mail");
let pass = document.getElementById("password");
let phone = document.getElementById("phone");
/************show/hide password*********** */
let show = document.getElementById("show");
show.addEventListener("click",show_fun);
function show_fun(){
    let test = show.getAttribute("src")
    if(test == "../home/icon login/2.png")
    {
        pass.setAttribute("type","text");
        show.setAttribute("src","../home/icon login/1.png");
    }
    else if(test == "../home/icon login/1.png")
    {
        pass.setAttribute("type","password");
        show.setAttribute("src","../home/icon login/2.png");
    }
}
/****************ADD elmenet********** */
let count = 3;
let add_button = document.getElementById("login");
add_button.addEventListener("click",verif);
function verif(){
    let verif_user = user.value;
    let verif_pass = pass.value;
    let verif_mail = mail.value;
    let verif_phone = phone.value;
    let cat_option = cat.value;
    let cat_shois;
    //verify
    if(!(verif_user == "") && !(verif_mail == "") && !(verif_pass == "") && !(verif_phone == "")){
        formulaire_panel.style.animation="close_login .2s linear forwards";
        login.style.visibility="hidden";
        if(cat_option == "google")
            cat_shois = "go";
        else if(cat_option == "facebook")
            cat_shois = "fa";
        else
            cat_shois = "other";

        //create item
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class","card"); 
        newDiv.setAttribute("id",count); 
        count++;
        //3abbi item
        newDiv.innerHTML=`
                            <div class="logo_card">
                                <img src="icon/${cat_shois}.png" class="card_img">
                            </div>
                            <div class="disc_card">
                                <p class="WebSite">${cat_option}</p>
                                <p class="e-mail">${verif_mail}</p>
                            </div> 
        `;
        //puch item
        cardes.appendChild(newDiv);
        //access *improtenet*
        let card = document.querySelectorAll(".card");
        // Add a click event listener to each card
        // Add a click event listener to each card
        card.forEach(image => {
            image.addEventListener("click", () => {
                let id = image.getAttribute("id");
                details.style.visibility="visible";
                ditails_formulaire_panel.style.animation="open_ditails .2s linear forwards";
            });
        });
        /*****exite *****/
        function exite_img(){
            details.style.visibility="hidden";
            ditails_formulaire_panel.style.animation="close_ditails .2s linear forwards";
        }
    }
    else{
        //user
        if(verif_user == "")
            user.style.borderColor="transparent transparent red";
        else
            user.style.borderColor="transparent transparent #2a2828";
        //mail
        if(verif_mail == "")
            mail.style.borderColor="transparent transparent red";
        else
            mail.style.borderColor="transparent transparent #2a2828";
        //pass
        if(verif_pass == "")
            pass.style.borderColor="transparent transparent red";
        else
            pass.style.borderColor="transparent transparent #2a2828";
        //phone
        if(verif_phone == "")
            phone.style.borderColor="transparent transparent red";
        else
            phone.style.borderColor="transparent transparent #2a2828";
    }
}
/*****************select cards for ditails********************** */

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
    formulaire_panel.style.animation="close_login .2s linear forwards";
}
/***********edite********* */
let edite = document.getElementById("edite");
let user_edite = document.getElementById("user_edite");
let mail_edite = document.getElementById("mail_edite");
let pass_edite = document.getElementById("password_edite");
let phone_edite = document.getElementById("phone_edite");
edite.addEventListener("click",edite_click);
function edite_click(){

}