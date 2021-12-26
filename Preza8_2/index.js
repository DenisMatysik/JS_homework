//Task1
// const drawDohod = () =>{
//     document.getElementsByClassName('doxodDiagramma')[0].classList.remove("none");
//     let ipputdoxodText = Number(document.getElementById("numberInput").value);
//     document.getElementsByClassName("doxodDiagramma")[0].style.height = ipputdoxodText + "px";
// }

// const drawRashod = () =>{
//     document.getElementsByClassName('rashodDiagramma')[0].classList.remove("none");
//     let ipputRashodText = Number(document.getElementById("numberInput").value);
//     document.getElementsByClassName("rashodDiagramma")[0].style.height = ipputRashodText + "px";
// }

// const cleanDiagram = () =>{
//     document.getElementsByClassName('doxodDiagramma')[0].classList.add("none");
//     document.getElementsByClassName('rashodDiagramma')[0].classList.add("none");
// }

// document.getElementById("dohodRadio").addEventListener('click',drawDohod);
// document.getElementById("rashodRadio").addEventListener('click',drawRashod);
// document.getElementById("clean").addEventListener('click',cleanDiagram);

//Task2
// const addToTable = (name,age) => {
//     const tdName= document.createElement('td');
//     tdName.innerText = name;
//     const tdAge=document.createElement('td');
//     tdAge.innerText = age;
//     const trUser = document.createElement('tr');
//     trUser.appendChild(tdName);
//     trUser.appendChild(tdAge);
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

//Task3
// function checkMail() {
// let address = document.getElementById("email");
// let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// if (reg.test(address.value) == false){
//    document.getElementById("email").style.borderColor = "red";
//    alert("Что-то ведено неправильно");
// }
// else {
//    document.getElementById("email").style.borderColor = "green";
//    alert("Всё введено норм");
// }
// }

// function outFocus() {
//    alert("Потеря фокуса")
// }

// document.getElementById("check").addEventListener('click',checkMail); // вызов 1
// document.getElementById("email").addEventListener('blur',outFocus); // вызов 2

//Как убрать вызов outFocus при нажатии кнопки Check? Не получаестя через removeEventListener у меня
// И почему когда я меняю поле email на checkbox(это id формы) (в вызове 2) событие outFocus не рабоатет

// Task4

let space = " ";


function drawCircle(color, radius, left, top) {
   let circleArr = document.getElementById("circleinf").value.split(space);
   color = circleArr[0];
   radius = Number(circleArr[1]);
   left = Number(circleArr[2]);
   top = Number(circleArr[3]);

   let circle = document.getElementsByClassName("figure")[0]; // тут нужно создать элемент новый
   
   circle.style.height = 2*radius + "px";
   circle.style.width = 2*radius + "px";
   circle.style.backgroundColor = color;
   circle.style.borderRadius = 0.5; // чего ты сука не превращаеься в круг
   circle.style.left = left + "px";
   circle.style.top = top + "px";
}

function drawSquare(color, side, left, top) {
   let squareArr = document.getElementById("squareinf").value.split(space);
   color = squareArr[0];
   side = Number(squareArr[1]);
   left = Number(squareArr[2]);
   top = Number(squareArr[3]);
   let square = document.getElementsByClassName("figure")[0]; // тут нужно создать элемент новый
   square.style.height = side + "px";
   square.style.width = side + "px";
   square.style.backgroundColor = color;
   square.style.left = left + "px";
   square.style.top = top + "px";
}

function drawRectangle(color, height, width , left, top) {
   let rectangleArr = document.getElementById("rectangleinf").value.split(space);
   color = rectangleArr[0];
   height = Number(rectangleArr[1]);
   width = Number(rectangleArr[2]);
   left = Number(rectangleArr[3]);
   top = Number(rectangleArr[4]);
   let rectangle = document.getElementsByClassName("figure")[0]; // тут нужно создать элемент новый
   rectangle.style.height = height + "px";
   rectangle.style.width = width + "px";
   rectangle.style.backgroundColor = color;
   rectangle.style.left = left + "px";
   rectangle.style.top = top + "px";
   
}

function mainInf (){
   alert("Введите цвет, высоту, ширину, положение на странице по Х, положение на странице по У через пробел")
}


document.getElementById("circle").addEventListener('click',drawCircle);
document.getElementById("square").addEventListener('click',drawSquare);
document.getElementById("rectangle").addEventListener('click',drawRectangle);
document.getElementById("main-inf").addEventListener('click',mainInf);

// как квадрат превратить в круг?
