const saveGoal = document.getElementById("displayGoal");
const doneTasks = document.getElementById("doneGoals");
const allTasks = document.getElementById("allGoals");
const unfinishedTasks = document.getElementById("unfinishedGoals");
let numbertasks = 0;

// Модальное окно
const modal = document.getElementById("myModal");
const btnAdd = document.getElementById("mainButton");
const btnclose = document.getElementsByClassName("close")[0];
btnAdd.addEventListener("click", function() {
    modal.classList.toggle("none");
    document.getElementById("modalTitle").value = "";
    document.getElementById("modalText").value = "";
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

class goalClass {
    constructor(nameGoal, textGoal){
        this.nameGoal = nameGoal;
        this.textGoal = textGoal;
        this.id = Date.now().hashCode();
    }

delete =()=>{
    numbertasks--;
    amount.innerText = numbertasks;
    document.getElementById(this.id).remove();
}
done =()=>{
    document.getElementById(this.id).classList.toggle("done");
   // как мне привязаться к одному элементу из метода displayGoal чтоб изменить название кпонки done на "Не выполнено";
    // чтоб я мог возвращать в список невыполненные дела
}
edit =()=>{
    document.getElementById(this.id).classList.toggle("edit");
    modal.classList.toggle("none");
    document.getElementById("modalTitle").value = this.nameGoal;
    document.getElementById("modalText").value = this.textGoal;
    // как перезписать значения в то же место
    
}
    displayGoal(){
        numbertasks++;
        amount.innerText = numbertasks;
        modal.classList.toggle("none");
        const goal = document.createElement("ul");
        goal.className = "goalContainer";
        goal.id = this.id;
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
        goal.appendChild(goalTitleNew);
        goal.appendChild(goalTextNew);
        goal.appendChild(goalsButtons);
        document.getElementsByClassName("allGoals")[0].appendChild(goal);
    }
}
    Number.prototype.hashCode = function () {   
        return Math.floor(Math.random() * this);
    };


function saveGoalFunctions (){
    const modalTitleInput = document.getElementById("modalTitle");
    const modalTextInput = document.getElementById("modalText");
    const newGoals = [[modalTitleInput.value, modalTextInput.value]];
    const goals = newGoals.map(element => {
    return new goalClass(element[0],element[1]);
});
goals.forEach((goal)=>goal.displayGoal());
}
function showDoneTasks (){
    for ( let i=0; i<numbertasks;i++) {
    if (document.getElementsByClassName("goalContainer")[i].classList.contains("done")){
        console.log('Задача выполнена')
    }
}
}

function showUnfinishedTasks(){
    for ( let i=0; i<numbertasks;i++) {
        if (document.getElementsByClassName("goalContainer")[i].classList.contains("done") == false){
            console.log(document.getElementsByClassName("goalContainer")[i].classList.contains("done"))
            console.log('Задача не выполнена');
        }
}
}
function showAllTasks (){
    console.log("Хочу вывести все элементы")
}
// function showDoneTasks (){
// // как обратиться ко все элементам 
//     console.log(typeof(this.users))
//     if (document.getElementsByClassName("goalContainer")[0].classList.contains("done")) {
//         console.log('Doen tasks')
//     }
//     else{
//         console.log('Ne Doen tasks')
//     }
// }

doneTasks.addEventListener("click", showDoneTasks)
saveGoal.addEventListener("click", saveGoalFunctions)
allTasks.addEventListener("click", showAllTasks)
unfinishedTasks.addEventListener("click", showUnfinishedTasks)


let amount = document.createElement("div");
amount.innerText = numbertasks;
document.getElementsByClassName("numberTasks")[0].appendChild(amount)