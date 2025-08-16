let tasks= []


function saveTask(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function loadTask(){
    const stored = localStorage.getItem('tasks')
    tasks = stored ? JSON.parse(stored):[]
}

function renderTasks(){
    const tasklist = document.getElementById("tasklists")
    tasklist.innerHTML = ''
    
    tasks.forEach((task,index) => {
        const li = document.createElement('li')
        
        const h4 = document.createElement('h4')
        h4.textContent = task
        li.appendChild(h4)

        const delbtn = document.createElement('button')
        delbtn.textContent = 'Delete'
        delbtn.classList = 'delbtn'
        
        delbtn.addEventListener('click',function(){
            tasks.splice(index,1);
            saveTask()
            renderTasks()
        })
        
        li.appendChild(delbtn)
        tasklist.appendChild(li)
    })
}

window.onload = function(){
    loadTask()
    renderTasks()
}

document.querySelector("#submit").addEventListener('click',function(e){
    let taskValue = document.querySelector("#tasks").value.trim()
    if(taskValue === ''){
        alert("Please Insert something")
        return;
    }
    tasks.push(taskValue)
    saveTask()
    renderTasks()
    document.querySelector("#tasklists").value = ''
})