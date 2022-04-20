let addBtn = document.querySelector(".button");
let body = document.querySelector("body");
let isBtnPressed = false;

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
            divEle.innerHTML=`<span class="material-icons"> done </span>
                              <p>${e.target.value}</p>
                              <span class="material-icons"> delete </span>`
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