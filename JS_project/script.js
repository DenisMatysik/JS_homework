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

// const addToTable = (goal) => {
//     const liGoal= document.createElement('li');
//     liGoal.innerText = goal;
//     const trUser = document.createElement('ul');
//     trUser.appendChild(liGoal);
//     return document.getElementsByTagName('tbody')[0].appendChild(trUser);
// }


// const addNewItemClick = (e)=>{
//     document.getElementsByClassName('modal')[0].classList.toggle("display-none");
// };
// const addClick = (e)=>{
//     e.preventDefault();
//     const form = document.forms[0];
//     if(Number(form.elements[1].value)<18)
//     {
//         alert("пошёл вон козёл вонючий");
//     }
//     else{
//         addToTable(form.elements[0].value, form.elements[1].value);
//     }
//     document.forms[0].reset();
//     document.getElementsByClassName('modal')[0].classList.toggle("display-none");

// };
// const cancelClick = (e)=>{
//     e.preventDefault();
//     document.forms[0].reset();
//     document.getElementsByClassName('modal')[0].classList.toggle("display-none");
// };

// document.getElementById("addNewItem").addEventListener('click',addNewItemClick);
// document.getElementsByName("addBtn")[0].addEventListener('click',addClick);
// document.getElementsByName("cancelBtn")[0].addEventListener('click',cancelClick);