// Preza16
// Task1
// function showEror() {
//     try{
//         const a = 54;
//         a = 64;
//         console.log("net oshibok")
//     }
//     catch (e){
//         console.log("kakaita oshibka", e.name, e.message)
//     }
// }
// showEror()

// Task2
// class index {
//     constructor(arr,value){
//         this.arr = arr;
//         this.value = value
//     }
//     find_index(){
//         if (this.arr.indexOf(this.value) === -1) {
//         console.error ('Не найдено в списке')   
//         }
//         else {
//             console.log ("Net oshibok")
//         }
//     }
// }
// let newIndex = new index([0,2,1,";tyz"],"123")
// newIndex.find_index()

// Task3

// Task4


let  check = (e) =>{
    let inputValue = document.getElementById("numberCheck").value;
    const space  = " ";
    let newArr = inputValue.split(space);
    console.log(newArr)
    for (let i =0; i< newArr.length; i++) {
        if ( isNaN(newArr[i]) ) {
            console.error( `Элемент ${newArr[i]} под номером ${i+1} не число`)
            document.getElementById("result").innerText = `Ошибка, элемент ${newArr[i]} под номером ${i+1} не число`;
        }
        else {
            let sum = 0;
            for (j=0; j<newArr.length;j++){
            sum = sum + Number(newArr[j])}
            document.getElementById("result").innerText = sum;
        }
    }
}

document.getElementById('checkField').disabled = true;
let active = () => {
    let inputLenght = document.getElementById("numberCheck");
    if (inputLenght.length != 0) {
        document.getElementById('checkField').disabled = false;
    }
}

document.getElementById('checkField').addEventListener('click', check)
document.getElementById('numberCheck').addEventListener('input', active)

// Preza 17 setevie zaprosi
// const someHandler = (xhr)=>{
//     if (xhr.status === 200){
//         console.log(JSON.parse(xhr.body)[0]);
//     }
// }


// let oXHR = new XMLHttpRequest();
// oXHR.open("GET", "" ,true)
// oXHR.addEventListener("readystatechange", someHandler)
// oXHR.send();