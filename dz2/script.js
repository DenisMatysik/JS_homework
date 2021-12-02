// Задание 1
// let i = 0;
// while (i<=50){
//     console.log(i);
//     i++;
// }

// Задание 2
// for (let i = 0; i<=100; i++){
//     if ( i%2 === 0) {
//     console.log(i)}
// }

//Задание 3
// function podschet() {
// let arr = [];
// for (let i=0; i<20;i++)(
//     arr[i] = i) 
// let sum = 0;
// for( i=0; i<arr.length;i++){
//     sum += arr[i]}
// console.log(arr,sum)}
// podschet()

//Задание 4
// let i = 0;
// let result = 1;
// while (i<8){
// result = result*2
// i++;}
// console.log(result);

// Задание 5 I dont know

// Задание 4 массивы
// let mass = ["Джаз","Блюз"] 
// let mass1 = mass.concat()
// mass1.push("Рок-н-Ролл")
// let mass2 = mass1.concat()
// mass2.splice(mass2.length-2,1,"Классика")
// let mass3 = mass2.concat()
// let removed = mass3.splice(0,1)
// alert(removed)
// let mass4 = mass3.concat()
// mass4.splice(0,0,"Рэп","Регги")
// console.log(mass,mass1,mass2,mass3,mass4)

// Задание канкулятор

// Вызов 0
// console.group('About Me');
// let me = [
//     { FirstName: 'Denis' },
//     { SecondName: 'Matysik' },
//     { Middlename: 'Alexandrovich' },
// ]
//     console.table(me)
//     console.log('age: 24');
//     console.log('khobbi: sleep '); // this is meme
//     console.log('quality: lazy ');

// Вызов 1

// Вызов 2 чёто с нета взял похожее
function fibi(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i -1] + result[i - 2]);
    }
    return result;
}
console.log(fibi(99));