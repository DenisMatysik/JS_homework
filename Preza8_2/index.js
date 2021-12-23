//Task1
const drawDohod = () =>{
    document.getElementsByClassName('doxodDiagramma')[0].classList.remove("none");
    let ipputdoxodText = Number(document.getElementById("numberInput").value);
    document.getElementsByClassName("doxodDiagramma")[0].style.height = ipputdoxodText + "px";
}

const drawRashod = () =>{
    document.getElementsByClassName('rashodDiagramma')[0].classList.remove("none");
    let ipputRashodText = Number(document.getElementById("numberInput").value);
    document.getElementsByClassName("rashodDiagramma")[0].style.height = ipputRashodText + "px";
}

const cleanDiagram = () =>{
    document.getElementsByClassName('doxodDiagramma')[0].classList.add("none");
    document.getElementsByClassName('rashodDiagramma')[0].classList.add("none");
}

document.getElementById("dohodRadio").addEventListener('click',drawDohod);
document.getElementById("rashodRadio").addEventListener('click',drawRashod);
document.getElementById("clean").addEventListener('click',cleanDiagram);

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