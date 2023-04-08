let disc1 = document.getElementById("disc1");
let card1 = document.getElementById("card1");
let plateau1 = document.getElementById("plateau1");

let disc2 = document.getElementById("disc2");
let card2 = document.getElementById("card2");
let plateau2 = document.getElementById("plateau2");

let disc3 = document.getElementById("disc3");
let card3 = document.getElementById("card3");
let plateau3 = document.getElementById("plateau3");
/*********variable */
let value1;
let i1 = 0;
let i2 = 0;
let i3 = 0;
window.addEventListener("scroll",scroll);
function scroll(){
    value1 = parseInt(window.scrollY);
    console.log(value1);
    /*************cart1 */
    if(value1 >= 450){
        /****disc */
        disc1.style.animation="open 2s ease forwards";
        /****plateau */
        plateau1.style.animation="plateau_open 2s ease forwards";
        /****card */
        if(i1==0){
            card1.style.animation="card_rotate_open 2s ease forwards";
            i1++;
        }
        if(i1==1){
            setInterval(() => {
                card1.style.animation="card_fly 3s ease infinite";
                i1++;
            }, 2000);
        }
    }
    /*************cart2 */
    if(value1 >= 1350){
        /****disc */
        disc2.style.animation="open2 2s ease forwards";
        /****plateau */
        plateau2.style.animation="plateau_open2 2s ease forwards";
        /****card */
        if(i2==0){
            card2.style.animation="card_rotate_open2 2s ease forwards";
            i2++;
        }
        if(i2==1){
            setInterval(() => {
                card2.style.animation="card_fly2 3s ease infinite";
                i2++;
            }, 2000);
        }
    }
    /*************cart1 */
    if(value1 >= 1900){
        /****disc */
        disc3.style.animation="open3 2s ease forwards";
        /****plateau */
        plateau3.style.animation="plateau_open3 2s ease forwards";
        /****card */
        if(i3==0){
            card3.style.animation="card_rotate_open3 2s ease forwards";
            i3++;
        }
        if(i3==1){
            setInterval(() => {
                card3.style.animation="card_fly3 3s ease infinite";
                i3++;
            }, 2000);
        }
    }

}