let addBtn = document.querySelector(".button");
let body = document.querySelector("body");
let isBtnPressed = false;

addBtn.addEventListener("click", function(){

    if(isBtnPressed==false){
    let divToAdd = document.createElement("div");
    divToAdd.setAttribute("class", "taskToDo");
    divToAdd.innerHTML = `<input type="text" placeholder="ENTER TASK TO ADD">`;
    body.appendChild(divToAdd);
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