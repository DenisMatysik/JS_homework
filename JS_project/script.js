// Модальное окно
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.addEventListener("click", function() {
    modal.style.display = "block";
    } 
)  
span.addEventListener("click", function() {
    modal.style.display = "none";
    }
)
// Клик везде кроме модального окна закроет его
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
        }
    }
)

const saveGoal = document.getElementById("saveGoal");
saveGoal.addEventListener("click", function () {
    const buttonChange = document.createElement("button"); // изменить
    buttonChange.innerText = "Изменить";
    const buttonDelete = document.createElement("button"); // удалить
    buttonDelete.innerText = "Удалить";
    const doneGoal =  document.createElement("input"); // чекбокс (на выполнено)
    doneGoal.type = "checkbox";
    const tagsField = document.createElement("div"); // поле с метками
    tagsField.innerText = "Информация о выбраных тегах";
    let newgoal = document.createElement("div");
    newgoal.style.padding = 10 + "px";
    newgoal.innerText = modalInput.value;
    document.querySelector(".goals").appendChild(doneGoal);
    doneGoal.style.display = "none";
    buttonChange.style.display = "none";
    buttonDelete.style.display = "none";
    tagsField.style.display = "none";
    document.querySelector(".goals").appendChild(newgoal);
    document.querySelector(".goals").appendChild(buttonChange);
    document.querySelector(".goals").appendChild(buttonDelete);
    document.querySelector(".goals").appendChild(tagsField);
    newgoal.addEventListener("click", function (){
        newgoal.style.border = "2px dotted black";
        doneGoal.style.display = "block";
        buttonChange.style.display = "block";
        buttonDelete.style.display = "block";
        tagsField.style.display = "block";
    })
})


// Удаление последнего элемента
function removeGoal (){
    document.getElementsByClassName("goals")[0].lastChild.remove();
}
document.getElementsByClassName("delete")[0].addEventListener("click", removeGoal);
