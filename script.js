

var redBtn = document.getElementById("inpRed");
var greenBtn= document.getElementById("inpGreen");
var blueBtn  = document.getElementById("inpBlue");
var para = document.querySelector(".para")
// console.log(para);

var red = 0;
var green = 0;
var blue = 0;

function change() {
    red = redBtn.value ;
    green = greenBtn.value ;
    blue =  blueBtn.value;

    // console.log(red);
    // console.log(green);
    // console.log(blue);

 para.style.color = 'rgb('+ red + ',' + green + ',' + blue + ')';


}
