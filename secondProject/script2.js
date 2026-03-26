let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let body = document.querySelector("body")
button.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("div");
    img.classList.add("img");
    let img2 = document.createElement("img");
    img2.setAttribute("src",`${inputs[1].value}`);
    img.appendChild(img2);

    let profileDatails = document.createElement("div");
    profileDatails.classList.add("profileDatails");
    let h3 = document.createElement("h3");
    h3.textContent=(inputs[0].value);
    let p = document.createElement("p");
    p.textContent=(inputs[2].value);
    profileDatails.appendChild(h3);
    profileDatails.appendChild(p);
    card.appendChild(profileDatails);
    card.appendChild(img);
    body.appendChild(card);

})