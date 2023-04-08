let open_img = document.getElementById("card_login");
let close_img = document.getElementById("login_close_img");
let login = document.getElementById("login_panel");
let password_saver = document.getElementById("title");
let allBody = document.getElementById("allBody");
let nav_bare_header = document.getElementById("nav_bare_header");
open_img.addEventListener("click", enter_img);
close_img.addEventListener("click", exite_img);

function enter_img(){
    login.style.animation="open_login .2s linear forwards";
    password_saver.style.visibility="hidden";
    open_img.style.visibility="hidden";
}
function exite_img(){
    login.style.animation="close_login .2s linear forwards";
    password_saver.style.visibility="visible";
    open_img.style.visibility="visible";
    // nav_bare_header.style.visibility="visible";
    // allBody.style.overflow="auto";
}
/************get values from filds******* */
let user = document.getElementById("user");
let pass = document.getElementById("password");
/************show/hide password*********** */
let login_panel_show = document.getElementById("login_panel_show");
login_panel_show.addEventListener("click",show_fun);
function show_fun(){
    let test = login_panel_show.getAttribute("src")
    if(test == "home/icon login/2.png")
    {
        pass.setAttribute("type","text");
        login_panel_show.setAttribute("src","home/icon login/1.png");
    }
    else if(test == "home/icon login/1.png")
    {
        pass.setAttribute("type","password");
        login_panel_show.setAttribute("src","home/icon login/2.png");
    }
}
/****************control user/pass/verif_code********** */
let login_button = document.getElementById("login");
login_button.addEventListener("click",verif);
function verif(){
    let verif_user = user.value;
    let verif_pass = pass.value;
    //user
        if(verif_user != "oussema")
            user.style.color="red";
        else
            user.style.color="black";
    //pass
        if(verif_pass != "123456789")
            pass.style.color="red";
        else
            pass.style.color="black";
        if((verif_user == "oussema")&&(verif_pass == "123456789")){
            login.style.animation="close_login .2s linear forwards";
            password_saver.style.visibility="visible";
            nav_bare_header.style.visibility="visible";
            allBody.style.overflow="auto";
        }
}