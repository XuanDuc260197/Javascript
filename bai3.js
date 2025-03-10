const ul=document.querySelector("ul");
let newItems=['Item 8','Item 9','Item 10'];
let li=document.createElement('li');
newItems.forEach(addItem);
function addItem(Item){
    let list=document.createElement("li");
    list.innerText=Item;
    ul.appendChild(list);
}
const li1= document.querySelectorAll("ul li")[0].style.color="red";
const li3= document.querySelectorAll("ul li")[2].style.backgroundColor="blue";
const li4= document.querySelectorAll("ul li")[3].remove()