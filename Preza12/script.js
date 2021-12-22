// Preza12
// Task1

// chislo = prompt("Vvedita chislo sek",)
// let n = Number(chislo*1000)
// function printMessage() {
// console.log("Aboba")
// }
// setInterval(printMessage, n);

//Task2
// function printMessage() {
// const someText = document.createElement("div");
// document.getElementById("container").after(someText);
// someText.innerText="Proshlo 5 sec";
// }
// setInterval(printMessage, 5000);

//Task3
// function printNumber(from,to) {
//     let current = from;
//     let timerId = setInterval(function(){
//         const someNumber = document.createElement("div");
//         document.getElementById("container").after(someNumber);
//         someNumber.innerText=current;
//         if (current == to){
//             clearInterval(timerId);
//         }
//         current++;
//     },1000)
// }
//     printNumber(1,5);

//Task4
let text = document.createElement("h1");
document.getElementById("container").appendChild(text);

const onAddElement =(e) =>{
    text.innerText="loading";
}

const showMassage = ()=>{
    function show () {
    text.innerText="важное сообщение - ABOBA"; }
    setTimeout(show,5000)
}

const deleteMessage =()=>{
    function dieMessage () {
    document.getElementById("container").lastChild.remove(); }
    setTimeout(dieMessage,8000)
}

document.getElementById("button").addEventListener('click',onAddElement);
document.getElementById("button").addEventListener('click',showMassage);
document.getElementById("button").addEventListener('click',deleteMessage);