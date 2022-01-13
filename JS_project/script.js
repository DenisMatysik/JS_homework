const saveGoal = document.getElementById("displayGoal");
// Модальное окно
const modal = document.getElementById("myModal");
const btnAdd = document.getElementById("mainButton");
const btnclose = document.getElementsByClassName("close")[0];
btnAdd.addEventListener("click", function() {
    modal.classList.toggle("none");
    } 
)  
btnclose.addEventListener("click", function() {
    modal.classList.toggle("none");
    }
)
window.addEventListener("click", function(event) {
  if (event.target == modal) { 
    modal.classList.toggle("none");
        }
    }
)
// нужно убрать сохранившиеся значения из полей modalTitle и modalText


class goalClass {
    constructor(nameGoal, textGoal){
        this.nameGoal = nameGoal;
        this.textGoal = textGoal;
        this.id = Date.now().hashCode();
    }
delete =()=>{
    document.getElementById(this.id).remove();
}
done =()=>{
    document.getElementById(this.id).classList.toggle("done");
    if (document.getElementById(this.id).classList.contains('done')){
        //
        console.log("Done") 
        console.log(this.id.goalTitleNew)
    }
    else{
        console.log("Ne dOne") 
    }
}
edit =()=>{
    modal.classList.toggle("none"); 
}
    displayGoal(){
        const user = document.createElement("ul");
        user.className = "goalContainer";
        user.id = this.id;
        const id = document.createElement("li")
        id.innerHTML = this.id;
        const goalTitleNew = document.createElement("h2")
        goalTitleNew.className = "goalTitle";
        goalTitleNew.innerText = `Название цели: ${this.nameGoal}`;
        const goalTextNew = document.createElement("h3");
        goalTextNew.className = "goalText"
        goalTextNew.innerText = `Описание цели: ${this.textGoal}`;
        const goalsButtons = document.createElement("div");
        goalsButtons.className = "goalsButtons"     
        const editB = document.createElement("button");
        editB.className = "buttonChange";
        editB.innerText="Изменить";    
        const deleteB = document.createElement("button");
        deleteB.className = "buttonDelete";
        deleteB.innerText="Удалить";   
        const doneB = document.createElement("button");
        doneB.className = "doneGoal";
        doneB.innerText="Выполнено";
        deleteB.addEventListener("click",this.delete);
        editB.addEventListener("click",this.edit);
        doneB.addEventListener("click",this.done);
        goalsButtons.appendChild(editB);
        goalsButtons.appendChild(deleteB);
        goalsButtons.appendChild(doneB)
        // user.appendChild(id);
        user.appendChild(goalTitleNew);
        user.appendChild(goalTextNew);
        user.appendChild(goalsButtons);
        document.getElementsByClassName("allGoals")[0].appendChild(user);
    }
}
    Number.prototype.hashCode = function () {   
        return Math.floor(Math.random() * this);
    };


// тут нужно значениее из input подтянуть
const modalTitleInput = document.getElementById("modalTitle");
const modalTextInput = document.getElementById("modalText");
const newUsers = [modalTitleInput, modalTextInput.value];
const users = newUsers.map(element => {
return new goalClass(element[0],element[1]);
});

function saveGoalFunctions (){
    users.forEach((user)=>user.displayGoal());
}

saveGoal.addEventListener("click", saveGoalFunctions)

// const newUsers = [["asd"],["asd"]];
// const users = newUsers.map(element => {
// return new goalClass(element[0],element[1]);
// });

// function saveGoalFunctions (){
//     users.forEach((user)=>user.displayGoal());
// }

// saveGoal.addEventListener("click", saveGoalFunctions)