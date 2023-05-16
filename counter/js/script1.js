
var btnIncrement=document.getElementById("add");
var btnDecrement=document.getElementById("subt");
var counting=document.getElementById("counter");
var count=0;
btnIncrement.addEventListener("click",a,true);
function a(){
count++;
counting.innerHTML=count;   
}
btnDecrement.addEventListener("click",b,true);
function b(){
    count--;
    counting.innerHTML=count;
}
