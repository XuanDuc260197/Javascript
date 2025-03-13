let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
let Span =document.querySelector(".points");
let currentBox=0;
//Span.textContent=`${colors.length}`;
//console.log(Span);
const h4=document.getElementById("score");
/*colors.forEach((Color)=>{
    let box=document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor=Color;
    h4.insertAdjacentElement("afterend",box);
    box.addEventListener('click',function(){
        box.remove();
        UpdateBox(-1);
    })
    
})*/
Render();
function Render(){
    colors.forEach((Color)=>{
    let box=document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor=Color;
    h4.insertAdjacentElement("afterend",box);
    box.addEventListener('click',function(){
        box.remove();
        UpdateBox(-1);
    })
})
}
let Totalbox=document.querySelectorAll(".box");
console.log(Totalbox);
//let currentBox=0;
UpdateBox(Totalbox.length);



//let Span =document.querySelector(".points");
//console.log(Span);

function UpdateBox(number){
    currentBox=currentBox+number;
    Span.textContent=currentBox;
}
/*function UpdateBox(number){
    currentBox=currentBox+number;
    Span.textContent=currentBox;
}*/
/*Totalbox.addEventListener("click",function(){
    Totalbox.style.display='none';
    console.log(Totalbox.style.display);
})*/

const Button=document.querySelector("#btn");
Button.addEventListener('click',function(){
    Render();
    UpdateBox(Totalbox.length);
})