const form  = document.getElementById("form");
const buttonn = document.querySelector("#btn");
const input = document.querySelector("#task")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let val = input.value;
    const div = document.createElement("div");
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete"
    div.innerHTML=`<h1>${val}</h1>`
    div.appendChild(dltBtn);
    document.body.appendChild(div);
    dltBtn.addEventListener("click",()=>(
        div.remove())
    )
})