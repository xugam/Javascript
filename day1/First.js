
console.log("Hello From JS");
let q = 5;
var r = 5;
let nm = "Sugam";
var x= 1;
const name= document.getElementById("name");
const body = document.getElementById("body");

function changecolor(Name){
    body.style.backgroundColor=Name;
    
    name.innerHTML = Name;
}
setTimeout(function(){
    x-=0.5;
    body.style.opacity = x;
}, 1000);

setTimeout(function(){
    changecolor('white');
}, 5000);