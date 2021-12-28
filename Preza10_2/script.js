//Task1
// let obj = {
//     0: 'Denis',
//     1: 2,
//     2: 3,
//     length:4
// }
// let newArr = Array.from(obj)
// for( let value of newArr){
//     value+= "Bay";
//     console.log(value)
// }

// let arr = [10,20,30]
// for(let number of arr){
//     number+=1;
//     console.log(number)
// }

//Task2
// let ul = document.getElementById("ul")
// let arr = ul.querySelectorAll("li");
// let newArr = Array.from(arr);
// newArr.forEach(function(item, index){
//     console.log(`Por.№'${index+1} ${item.innerText}`)
// })

// Task3
// let prices = {
//     price1:100,
//     price2:200,
//     price3:300,
//     price4:400
// }

// let arr = Object.values(prices);
// console.log(arr)

// function sumPrices (){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
//     }
//     console.log(sum)
// }
// sumPrices()

// Task4
// let product = {
//     name: "John",
//     price: 30,
//     sold: false,
// }
// let {name: a, price:b, sold:c} = product;
// console.log(a,b,c)

//Task5
let ironMan = ["Tony","Stark",1,45,2,5,34,9,11]
let [name1,name2,...other]=["Tony","Stark",1,45,2,5,34,9,11]

function sumPrices (){
        let sum = 0;
        for(let i=0;i<other.length;i++){
        sum = sum + other[i];
        }
        console.log(sum)
    }//что за проблема с отступами?
console.log(name1,name2)
console.log(other)
sumPrices()
