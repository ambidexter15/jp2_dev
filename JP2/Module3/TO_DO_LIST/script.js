let addBtn = document.querySelector(".button");
let body = document.querySelector("body");
let isBtnPressed = false;

// localStorage.setItem();
// localStorage.getItem();

let tasktoDo = localStorage.getItem("tasktoDO");

if(tasktoDo){
   tasktoDo = JSON.parse(localStorage.getItem("tasktoDo"));

   for(let i=0; i< tasktoDo.length; i++)
   {
    let divEle = document.createElement("div")
    divEle.setAttribute("class", "taskone");
    divEle.innerHTML=`<span class="material-icons done"> done </span>
                      <p>${e.target.value}</p>
                      <span class="material-icons delete"> delete </span>`
    let deletebtn = divEle.querySelector(".delete")
    deletebtn.addEventListener("click", function(e){
        e.target.parentNode.remove();
    })
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
            let deletebtn = divEle.querySelector(".delete")
            deletebtn.addEventListener("click", function(e){
                e.target.parentNode.remove();
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