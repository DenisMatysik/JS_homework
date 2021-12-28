// Task1
// let submit = (e) => {
//     let elements = document.forms[0].elements;
//     console.log('Field 1: ' + elements['field1'].value);
//     console.log('Field 2: ' + elements['field2'].value);
//     document.forms[0].reset();
//     elements['submit'].disabled = true;
//     e.preventDefault();
// }
// document.forms[0].addEventListener('submit', submit);

// Task2
// function changeForm(e){
//     let elements = document.getElementById('formSecond').elements;
//     elements["inputTask2"].value = "123";
//     e.preventDefault();
// }
// document.getElementById('formSecond').addEventListener("submit", changeForm)

// Task3
// function checkboxForm(e){
//     let elements = document.getElementById('forsmThird').elements;
//     console.log(elements["inputTask3"].value);
//     let checkboxCollection = document.querySelectorAll("#checkbox");
//     for (let i=0; i < checkboxCollection.length; i++){
//         if (checkboxCollection[i].checked) {
//             console.log(checkboxCollection[i].value);
//         }
//     }
//     e.preventDefault();
// }
// document.getElementById('forsmThird').addEventListener("submit", checkboxForm)

// Task4
// function inputFocus(e){
//     let input4 = document.querySelector('#inputTask4');
//     if (input4.value == ""){
//     input4.focus();
//     console.log("focus na input")
//     }
//     else{
//         console.log("Vse norm")
//     }
//     e.preventDefault();
// }
// document.getElementById('formFour').addEventListener("submit", inputFocus)

//Task5
document.getElementById("inputPhone").setAttribute("maxlength","13");
function vvodZnacheniy(e){
    let elements = document.getElementById('formFive').elements;
    console.log(typeof(elements), elements);
    for (let i=0; i < elements.length-1; i++){
    // if (document.getElementById("inputPhone").length > 13){
    // console.log(elements["phone"].substring(0,12))
    // } // не получаетсья задать длину в 13 символов
    console.log(elements[i].name, elements[i].value)
    }
    e.preventDefault();
}
document.getElementById('formFive').addEventListener("submit", vvodZnacheniy)
