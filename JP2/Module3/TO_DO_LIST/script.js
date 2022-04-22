let addBtn = document.querySelector(".button");
let body = document.querySelector("body");
let isBtnPressed = false;

// localStorage.setItem();
// localStorage.getItem();

let tasktoDo = localStorage.getItem("tasktoDo");

if(tasktoDo){
   tasktoDo = JSON.parse(localStorage.getItem("tasktoDo"));

   for(let i=0; i< tasktoDo.length; i++)
   {
    let divEle = document.createElement("div")
    divEle.setAttribute("class", "taskone");
    divEle.innerHTML=`<span class="material-icons done"> done </span>
                      <p>${tasktoDo[i]}</p>
                      <span class="material-icons delete"> delete </span>`
    let deletebtn = divEle.querySelector(".delete")
    deletebtn.addEventListener("click", function(e){
        e.target.parentNode.remove();
    })

    let allP = document.querySelectorAll(".taskone p") ;
    let newArr = [];
    for(let i=0; i<allP.length; i++)
    {
        newArr.push(allP[i].innerHTML);
    }

    localStorage.setItem("tasktoDo", JSON.stringify(newArr) );   


    let parentDiv = document.querySelector(".taskList");
    parentDiv.appendChild(divEle);
    addBtn.click()
   }

}

else {
    tasktoDo =[];
    tasktoDo = JSON.stringify(tasktoDo);
    localStorage.setItem("tasktoDo", tasktoDo)
}

let CompletedList = localStorage.getItem("CompletedList");

if(CompletedList){
   

}

else {
    CompletedList =[];
    CompletedList = JSON.stringify(CompletedList);
    localStorage.setItem("CompletedList", CompletedList)
}

let taskListBtn = document.querySelector(".taskLists");
let completedBtn = document.querySelector(".completedList");

taskListBtn.addEventListener("click", function(){
    if(!taskListBtn.classList.contains("active")){
        taskListBtn.classList.add("active");
        completedBtn.classList.remove("active");
    }

    let allTaskDiv = document.querySelectorAll(".taskone");
    for(let i=0; i<allTaskDiv.length ; i++){
        allTaskDiv[i].remove();
    }

    let tasktoDo = JSON.parse(localStorage.getItem("tasktoDo"));
    for( let i= 0; i < tasktoDo.length; i++){
        let divEle = document.createElement("div")
        divEle.setAttribute("class", "taskone");
        divEle.innerHTML=`<span class="material-icons done"> done </span>
                          <p>${tasktoDo[i]}</p>
                          <span class="material-icons delete"> delete </span>`;
         let deletebtn = divEle.querySelector(".delete")
         deletebtn.addEventListener("click", function(e){
             e.target.parentNode.remove();
             let allP = document.querySelectorAll(".taskone p") ;
             let newArr = [];
              for(let i=0; i<allP.length; i++)
                 {
                     newArr.push(allP[i].innerHTML);
                 }

            localStorage.setItem("tasktoDo", JSON.stringify(newArr) );  
                })

                let doneBtn = divEle.querySelector(".done");
                doneBtn.addEventListener("click", function(e){
                    let taskName = doneBtn.nextElementSibling.innerHTML;
                    e.target.parentNode.remove();
                    
                    let allP = document.querySelectorAll(".taskone p") ;
                     let newArr = [];
                      for(let i=0; i<allP.length; i++)
                         {
                             newArr.push(allP[i].innerHTML);
                         }
        
                    localStorage.setItem("tasktoDo", JSON.stringify(newArr) );   
        
                    let CompletedList = JSON.parse(localStorage.getItem("CompletedList"));
                    CompletedList.push(taskName);
                   localStorage.setItem("CompletedList", JSON.stringify(CompletedList));
                })
        
                    let parentDiv = document.querySelector(".taskList");
                    parentDiv.appendChild(divEle);


    }

})

completedBtn.addEventListener("click", function(){
    if(!completedBtn.classList.contains("active")){
        taskListBtn.classList.remove("active");
        completedBtn.classList.add("active");
    }

    let allTaskDiv = document.querySelectorAll(".taskone");
    for(let i=0; i<allTaskDiv.length ; i++){
        allTaskDiv[i].remove();
    }

    let CompletedList = JSON.parse(localStorage.getItem("CompletedList"));
    for( let i=0; i< CompletedList.length ; i++)
    {
        let divEle = document.createElement("div")
            divEle.setAttribute("class", "taskone");
            divEle.innerHTML=`<p>${CompletedList[i]}</p>
                              <span class="material-icons delete"> delete </span>`
                        
        let deletebtn = divEle.querySelector(".delete")
            deletebtn.addEventListener("click", function(e){
                e.target.parentNode.remove();

                let allP = document.querySelectorAll(".taskone p") ;
                let newArr = [];
                 for(let i=0; i<allP.length; i++)
                    {
                        newArr.push(allP[i].innerHTML);
                    }
   
               localStorage.setItem("CompletedList", JSON.stringify(newArr) );  
            })
    

            let parentDiv = document.querySelector(".taskList");
            parentDiv.appendChild(divEle);
        }


})



addBtn.addEventListener("click", function(){

    if(isBtnPressed==false){
    let divToAdd = document.createElement("div");
    divToAdd.setAttribute("class", "taskToDo");
    divToAdd.innerHTML = `<input type="text" placeholder="ENTER TASK TO ADD">`;
    body.appendChild(divToAdd);
    
    divToAdd.addEventListener("keypress" ,function(e){
        if(e.key =='Enter'){
            if(e.target.value.length==0){
                addBtn.click();
                return;
            }
            let divEle = document.createElement("div")
            divEle.setAttribute("class", "taskone");
            divEle.innerHTML=`<span class="material-icons done"> done </span>
                              <p>${e.target.value}</p>
                              <span class="material-icons delete"> delete </span>`
            tasktoDo = JSON.parse(localStorage.getItem("tasktoDo"));
             tasktoDo.push(e.target.value);
            localStorage.setItem("tasktoDo", JSON.stringify(tasktoDo));

            let deletebtn = divEle.querySelector(".delete")
            deletebtn.addEventListener("click", function(e){
                e.target.parentNode.remove();
           

            let allP = document.querySelectorAll(".taskone p") ;
             let newArr = [];
              for(let i=0; i<allP.length; i++)
                 {
                     newArr.push(allP[i].innerHTML);
                 }

            localStorage.setItem("tasktoDo", JSON.stringify(newArr) );   

        })

        let doneBtn = divEle.querySelector(".done");
        doneBtn.addEventListener("click", function(e){
            let taskName = doneBtn.nextElementSibling.innerHTML;
            e.target.parentNode.remove();
            
            let allP = document.querySelectorAll(".taskone p") ;
             let newArr = [];
              for(let i=0; i<allP.length; i++)
                 {
                     newArr.push(allP[i].innerHTML);
                 }

            localStorage.setItem("tasktoDo", JSON.stringify(newArr) );   

            let CompletedList = JSON.parse(localStorage.getItem("CompletedList"));
            CompletedList.push(taskName);
           localStorage.setItem("CompletedList", JSON.stringify(CompletedList));
        })

            let parentDiv = document.querySelector(".taskList");
            parentDiv.appendChild(divEle);
            addBtn.click();
        }
    })
    isBtnPressed=true;

    }

    else{
        let modal = document.querySelector(".taskToDo");
        modal.remove();
        isBtnPressed = false;
      }



//     <!-- <div class="taskToDo">
//     <input type="text" placeholder="ENTER TASK TO ADD">
// </div> -->
})