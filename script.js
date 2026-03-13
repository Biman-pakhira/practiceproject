let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let btn = document.querySelector("#btn");
let submit = document.querySelector("#submit");
let TodaysTodo = document.querySelector(".TodaysTodo");
let future = document.querySelector(".futureToDo");
let completedTask = document.querySelector(".completedTodo");

// console.log(todate);
btn.addEventListener("click", ()=>{
    submit.click();
})

form.addEventListener("submit", (dtls)=>{
    dtls.preventDefault();
    // console.log(input);
    
    let taskname = input[0].value;
    let taskedate = input[1].value;
    let Prty = document.querySelector("select");
    
    if(taskname && taskedate){
        // console.log(taskedate);
        let taskdiv = document.createElement("div");
        // taskdiv.innerHTML = `${taskname}`;
        taskdiv.classList.add("taskdiv");
        let inputask = document.createElement("div"); 
        inputask.classList.add("inputask");
        inputask.innerHTML=`${taskname}`;
        taskdiv.appendChild(inputask);     
        let date = document.createElement("div");
        date.classList.add("date");
        date.innerHTML = `${taskedate}`
        console.log(taskedate);
        
        taskdiv.appendChild(date);
        
        let Priority = document.createElement("div");
        Priority.classList.add(`Priority-${Prty.value}`);
        Priority.innerHTML=`${Prty.value}`;
        taskdiv.appendChild(Priority);
        
        let checkbox = document.createElement("span");
        checkbox.classList.add("boxemoji");
        checkbox.innerHTML = "⬜";
        taskdiv.appendChild(checkbox);
        
        let bttn = document.createElement("i");
        bttn.classList.add("fas", "fa-trash");   
        taskdiv.appendChild(bttn);      
        
        bttn.addEventListener("click", ()=>{
            taskdiv.remove();
        })        
        let todate = new Date();
        todate.setHours(0,0,0,0);
        
        let taskdatee = new Date(taskedate);
        taskdatee.setHours(0,0,0,0);
        
        if(taskdatee>todate){
            future.appendChild(taskdiv);  
        }else TodaysTodo.appendChild(taskdiv);
        
        
        input[0].value='';               
        input[1].value = '';
        checkbox.addEventListener("click", ()=>{
            checkbox.innerHTML = "✅"
            completedTask.appendChild(taskdiv);
        })  
    }else alert("fill properly");
})

