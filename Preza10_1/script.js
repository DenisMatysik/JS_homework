// Task1
// let user = {
//     name: 'Den',
//     age: 28,
//     sex: 'male'
// }

// for (let key in user) {
//     console.log('Key ' +key + 'user[key] ' + user[key])
// }

// Task2 
// let user = {
//     name: 'Den',
//     email: 'Den@gmail.com',
//     phane: 'Nokia',
//     id: '328'
// }
// let newUser = Object.assign(user)
// console.log(newUser)

// Task3
// let circle = {
//         radius: 10,
//         color: 'red',
//     }
// circle.calc = function(){
//     console.log(2*Math.PI*this.radius)
// }
// circle.calc()
// console.log(circle)

// Task4
// let string;
// let message = {
//             text: string}

//     message.setMassage = function(string){
//         this.text = string;
//     }

//     message.showMassage = function(){
//         alert(this.text)
//     }
//     message.setMassage('asd')
//     message.showMassage()

//Task5
// let rectangle = {
//     height: 10,
//     width: 20,
//     getArea(){
//         return this.height*this.width
//     }
// }

// console.log(rectangle.width); 
// console.log(rectangle.height);
// console.log(rectangle.getArea());

//Task6
// let rectangle = {
//         height: 10,
//         width: 20}

// rectangle.isEmpty = function(){
// alert("height" in rectangle)
// // alert("asdasd" in rectangle) - false
// }
// rectangle.isEmpty()

//Task7 
let user = {
    // name: '',
    // email:'',
    // phone:'',
    getinfo(){
        let vvodPromptName = prompt('VVedite imia')
        user.name = vvodPromptName;
        let vvodPromptEmail = prompt('VVedite email');
        user.email = vvodPromptEmail;
        let vvodPromptPhone = prompt('VVedite phone');
        user.phone = vvodPromptPhone;
    },
    introduce(){
        if (user.hasOwnProperty('name') == true) {
            alert(this.name);
        }
        if (user.hasOwnProperty('email') == true) {
            alert(this.name);
        }
        if (user.hasOwnProperty('phone') == true) {
            alert(this.name);
        }

    }
}
user.getinfo()
user.introduce()
console.log(user)