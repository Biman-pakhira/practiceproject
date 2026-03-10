let input = document.querySelector("#inputask");
let selectCard = document.querySelector("#card");
let h1 = document.querySelector("h1");


input.addEventListener("input", (dets)=>{
    console.log(dets.data);
})

selectCard.addEventListener("change", (he)=>{
    h1.textContent = `${he.target.value} card Selected`;
})

``