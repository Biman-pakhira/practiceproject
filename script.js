let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let btn = document.querySelector("#btn");
let submit = document.querySelector("#submit");
let TodaysTodo = document.querySelector(".TodaysTodo");


btn.addEventListener("click", ()=>{
    submit.click();
})

form.addEventListener("submit", (dtls)=>{
    dtls.preventDefault();
    // console.log(input);
    
    let taskname = input[0].value;
    let taskedate = input[1].value;
    let Prty = document.querySelector("select")
    
    if(taskname && taskedate){
        // console.log(taskedate);
        let taskdiv = document.createElement("div");
        // taskdiv.innerHTML = `${taskname}`;
        taskdiv.classList.add("taskdiv");
        let inputask = document.createElement("div"); 
        inputask.classList.add("inputask");
        inputask.innerHTML=`${taskname}`
        taskdiv.appendChild(inputask);

        let date = document.createElement("div");
        date.classList.add("date");
        date.innerHTML = `${taskedate}`
        taskdiv.appendChild(date);
        
        let Priority = document.createElement("div");
        Priority.classList.add("Priority");
        Priority.innerHTML=`${Prty.value}`;
        taskdiv.appendChild(Priority); 
        
        let bttn = document.createElement("div");
        bttn.classList.add("bttn");
        bttn.innerHTML = "delete";
        taskdiv.appendChild(bttn);

        bttn.addEventListener("click", ()=>{
            taskdiv.style.display="none";
        })        

        TodaysTodo.appendChild(taskdiv)
    }else alert("fill properly")
})

