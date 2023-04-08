/******animation */
let moon = document.getElementById("moon");
let rigth = document.getElementById("rigth");
let left = document.getElementById("left");
let bgc1 = document.getElementById("bgc1");
let title = document.getElementById("title");

/*********variable */
let value;
window.addEventListener("scroll",scroll);
function scroll(){
    value = parseInt(window.scrollY);
    console.log(value);
    let rot = value * 0.2;
    if(rot <= 70)
    {
        moon.style.rotate = rot + 'deg';
    }
    bgc1.style.top = value * 0.5 + 'px';
    rigth.style.right = value * -1.5 + 'px';
    left.style.left = value * -1.5 + 'px';
    if(value >=350)
        title.style.visibility="hidden";
    else
        title.style.visibility="visible";
}
