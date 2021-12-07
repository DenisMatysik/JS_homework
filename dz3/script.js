// Задание 0
// let name;
// let sayHello = (name) =>{
//     switch (name){
//         case "Oleg":
//         alert ("Hello, Oleg!");
//         break;
//     case "Viktor":
//         alert ("Hello, Viktor!");
//         break;
//     case "Mark":
//         alert (" Hi, Mark!");
//         break;
//     }
// }
// sayHello("Mark");

// Задание 1
// let min = (a,b) => {
//     if (a>b) {
//         alert(b) 
//     }
//     else {
//         alert(a) 
//     }
// }
// min(15,11)

// Задание 2
// let pow = (a,b) => {
// console.log(a**b)
// }
// pow(3,3)

// Задание 3
// let isEven = (n) => {
//     if (n%2===0 ) {
//         alert("Чётное")
//     }
//     else {
//         alert("Не чётное")
//     }
// }
// isEven(11123123123)

// Задание 4
// function deleteChars(str) {
//     let a = str.slice(1, str.length-1);
//     console.log(a);
// }
// deleteChars("123123123");

// Задание 5
// function convertFloor(floor) {
//     if (floor >= 0 && floor < 13) {
//         floor++;
//         console.log(floor);
//     } else if (floor == 13) {
//         console.log("Такого этажа нет");
//     } else {
//         console.log(floor);
//     }
// }
// convertFloor(-1);
// convertFloor(12);
// convertFloor(13);
// convertFloor(14);

// Задание 6
// switch
// function convertType1(value, toType) {
//     switch (toType) {
//         case "boolean":
//             return Boolean(value);
//         case "number":
//             return Number(value);
//         case "string":
//             return String(value);
//         default:
//             console.log("Другой тип данных");
//     }
// }
// console.log(convertType1("my string", "string"));

// //  Function Expression
// let convertType2 = function(value, toType) {
//     if (toType === "boolean") {
//         return Boolean(value);
//     } else if (toType === "number") {
//         return Number(value);
//     } else if (toType === "string") {
//         return String(value);
//     }
// }
// console.log(convertType2("my string", "boolean"));

// // стрелочная функция
// let convertType3 = ((value, toType) => {
//     if (toType === "boolean") {
//         return Boolean(value);
//     } else if (toType === "number") {
//         return Number(value);
//     } else if (toType === "string") {
//         return String(value);
//     }
// })
// console.log(convertType3("my string", "number"));

// Задание 7
function transformArray (arr, index1, index2, adding) {
    for(a = 0; a < arr.length; a++) {
       arr[a] = arr[a].concat(adding);
    }
    console.log(arr);
}
let arr2 = ["fngp", "kgei", "fpos", "clfw"];
transformArray(arr2, 2, 3, "green");
// не поменял местами?
// Задание 8