// TAsk1 preza 15
// class Car {
//     constructor(name,year,color){
//         this.name = name;
//         this.age = year;
//         this.color = color;
//     }
//     changeColor (newColor) {
//        this.color = newColor
//     }
// }

// let car = new Car ("BMW",2012,"red");
// console.log(car.color)
// car.changeColor("black");
// console.log(car.color)

// // Task2
// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     // set str(name){
//     //     this.name = str
//     // }
//     // Zachem tyt 2 set
//     // set vozrast(age){
//     //     this.vozrast=age
//     // }

//     get info () {
//        return `${this.name}s age ${this.age} `;
//     }
// }
// let john = new Person ("John",34);
// console.log(john.info);

// // Task3 
// class Animal {
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//        return this.name + "says hi";
//     }
// }
// let kot = new Animal("kot")
// console.log(kot.speak())

// class Cat extends Animal{
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         return `${this.name}s meows`;
//     }
// }
// let cat = new Cat ("Mr.Meows")

// console.log(cat.speak());

// Task4

class Person {
    constructor(name,year){
        this.name = name;
        this.age = year;
    }
    get go () {
        if (this.age >= 1){
       return `${this.name} ходит`}
       else {
           return `${this.name} ещё не ходит`
       }
    }
    get speak () {
        if (this.age >= 2) {
        return `${this.name} разговаривает`}
        else { 
            return `${this.name} ещё не разговаривает`
        }
    }
    get eat () {
        return `${this.name} ест`
    }
}
class childrens extends Person{
    constructor(name, year, food){
        super(name,year);
        this.food = food;
    }
    get eat () {
        return `${this.name} ест ${this.food}`
    }
    get cry (){
        return `${this.name} плачет`
    }
    get goSchool (){
        if (this.age >= 6) {
            return `${this.name} ходит в школу`}
            else { 
                return `${this.name} ещё не ходит в школу`
            }
    }
}
class adults extends Person {
    constructor(name, year, relationship){
        super(name,year);
        this.relationship = relationship;
    }

    get married () {
        if (this.relationship === "свободен") {
            return `${this.name} не в отношениях`}
        else {
            return `${this.name} ${this.relationship}`}
    }
}

let child = new childrens("Ребёнок", 1, "кашу")
let adult = new adults("Взрослый", 34, "женат")

console.log(child.speak, child.go, child.eat, child.cry, child.goSchool)
console.log(adult.speak, adult.go, adult.eat, adult.married )

// я нигде не использовал сеттеры, поэтому я не вижу их необходимость, если я сам все значения задаю
// B можно ли вызвать через super геттеры родительского класса ( если мы метод через геттер записали) - 
//  я хочу обратиться к геттеру eat класса Person через super - я так смогу сделать?
 


// something primer
// class Square {
//     constructor(length) {
//         this.length = length;
// }
//     set length(value){
//         this.__length=value;
//     }
//     get length(){
//         return this.__length;
//     }
//     get square(){
//         return this.length**2;
//     }
//     get perimeter(){
//         return this.length*4;
//     }
// }
// let newFigure = new Square(10);
// console.log(`${newFigure.length} ${newFigure.perimeter} ${newFigure.square}`);