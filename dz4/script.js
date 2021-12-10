// // Задание 1
// let p = document.createElement("p");
// p.setAttribute("class", "text");
// p.innerText = ("Это всего лишь текст");
// document.body.prepend(p);
// let div = document.createElement("div");
// div.setAttribute("class", "alert");
// div.innerText = ("А это сообщение об ошибке"); 
// p.after(div);

// Задание 2
let ol = document.createElement("ol");
let names = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
document.body.prepend(ol);
for (let i=0; i<names.length;i++) {
let name = document.createElement("name");
name.innerText = (names[i]);
if (i%2 ==0) {
    name.setAttribute("class","odd") 
}
else {
    name.setAttribute("class","even")
}
ol.append(name);
}
// как сделать цвета белым у names с 2 одинаковыми буквами?

// задание 3