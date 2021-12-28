// Задание 1
// let per1 = prompt("Введите любой символ, число, или ДР","Например 1,а, 44")
// let per2 = prompt("Введите любой символ, число, или ДР","Например 1,а, 44")
//     console.log("До:",per1, per2)
// per2 = [per1, per2]
// per1 = per2[1]
// per2 = per2[0] 
//     console.log("После:", per1,per2)

//Задание 2
// let cifr1 =  [prompt("Введите 1-ую цифру")]
// let cifr2 =  [prompt("Введите 2-ую цифру")]
// let cifr3 =  [prompt("Введите 3-ую цифру")]
// let cifr4 =  [prompt("Введите 4-ую цифру")]
// let cifr5 =  [prompt("Введите 5-ую цифру")]
// let cifr6 =  [prompt("Введите 6-ую цифру")]
// let cifr7 =  [prompt("Введите 7-ую цифру")]
// let cifr8 =  [prompt("Введите 8-ую цифру")]
// let cifr9 =  [prompt("Введите 9-ую цифру")]
// let cifr10 =  [prompt("Введите 10-ую цифру")]
// let mass = [cifr1,cifr2,cifr3,cifr4,cifr5,cifr6,cifr7,cifr8,cifr9,cifr10]
// console.log(mass)
// console.log(Number(mass[0]) + Number(mass[4]) + Number(mass[8]))

// //Задание 3
function itog() {
let per1 = prompt("Введите любой символ, число, или что угодно","Например 10,а")
let per2 = prompt("Введите любой символ, число, или что угодно","Например 22,а")
per2 = [per1, per2]
per1 = per2[1]
per2 = per2[0] 
let mass = [1,2,3,4,5,6,7,8,9,10]
let sum = (mass[0] + mass[4] + mass[8])
let obj = { 
    per1 : per1,
    per2 : per2,
    sum : sum,}  
    console.log(obj)}
itog();
//начинай писать на английском
