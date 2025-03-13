/*function Render(){
    const h4=document.getElementById("score");
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
let Totalbox=document.querySelectorAll(".box");
console.log(Totalbox);
UpdateBox(Totalbox.length);
}