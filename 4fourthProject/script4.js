let button = document.querySelector("button");
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let error = document.querySelector(".errorNsuccess");
let main = document.querySelector(".main");
let employess = document.querySelector(".employessdata");
function itrate(){
    for(let input of inputs){
        input.value="";
    }
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if((inputs[0].value) && (inputs[1].value) && (inputs[2].value)){
        let employecard = document.createElement("div");
        employecard.classList.add("employecard");
        let employee = document.createElement("div");
        employee.classList.add("employee");

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerHTML = inputs[0].value;
        employee.appendChild(name); 
        let role = document.createElement("div");
        role.classList.add("role");
        role.innerHTML = inputs[1].value;
        employee.appendChild(role); 

        let age = document.createElement("div");
        age.classList.add("age");
        age.innerHTML = inputs[2].value;
        let dlte = document.createElement("button");
        dlte.classList.add("delete");
        dlte.innerHTML="delete";
        employee.appendChild(age);
        employecard.appendChild(employee);
        employecard.appendChild(dlte);
        employess.appendChild(employecard);
        error.innerHTML= "<p>Success : Message Added</p>";
        error.style.color="green";
        error.style.display="inline";
        itrate()
        dlte.addEventListener("click",()=>{
            employecard.remove()
        })
    }else{
        error.style.display="inline";
        itrate();
    }
    
    
    
})