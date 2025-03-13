let h1Counter=document.getElementById("counter");
console.log(h1Counter);
let count=0;
const btnNext=document.querySelector(".btn.counterBtn.nextBtn");
const bntPre=document.querySelector(".btn.counterBtn.prevBtn");
console.log(btnNext);
console.log(bntPre);

h1Counter.textContent=0;

//call funtion start main program
//IncreaseCount();
//DecreaseCount();
//console.log(IncreaseCount);
//console.log(DecreaseCount);



    btnNext.addEventListener('click',function(){
        UpdateCount(1);
    })

    bntPre.addEventListener('click',function(){
        UpdateCount(-1);
    })



function UpdateCount(update){
    count=count+update;
    h1Counter.textContent=count;
    if(count>0){
        h1Counter.style.color="#008000"
    }
    else if(count<0){
        h1Counter.style.color="#FF0000"
    }
    else{
        h1Counter.style.color="#333333"
    }
}