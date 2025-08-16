//basic static to do app js
let btn = document.querySelector("#submit")

btn.addEventListener("click",()=>{

    let tasks = document.querySelector("#tasks").value.trim()
    if(tasks ===''){
        alert("please enter a task")
        return;
    }

    
     

    const li = document.createElement("li")
    

    const h4 = document.createElement("h4")
    h4.textContent = tasks
    li.appendChild(h4)

    const delbtn = document.createElement('button')
    delbtn.textContent  = 'Delete'
    delbtn.className = 'delbtn'
    

    delbtn.addEventListener('click',function(){
        li.remove()
    })
    li.appendChild(delbtn)

    document.getElementById("tasklists").appendChild(li)

    document.querySelector('#tasks').value = ''

})
