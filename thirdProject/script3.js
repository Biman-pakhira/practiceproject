let body = document.querySelector("body");
let p = document.querySelector("#p");
let error = document.querySelector(".error");
let decrement = document.querySelector("#decrement");
let increment = document.querySelector("#increment");
let clear = document.querySelector("#clear");


increment.addEventListener("click",()=>{

    let val = parseInt(p.innerHTML);

    p.innerHTML= ++val;
    decrement.disabled = false;
    error.style.display = "none";

})


decrement.addEventListener("click",()=>{
    val = parseInt(p.innerHTML);
    p.innerHTML= --val;
    if(val < 1){
        decrement.disabled = true;
        error.style.display = "inline";
    }
})
clear.addEventListener("click", ()=>{
    p.innerHTML=0;
    decrement.disabled = true;
    error.style.display = "inline";


})

