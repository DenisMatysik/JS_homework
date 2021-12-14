// Задание 1
// const close = (e) => {
//     document.getElementsByClassName("modal")[0].classList.add('none');
// }
// const show = (e) => {
//     document.getElementsByClassName("modal")[0].classList.remove('none');
// }
// document.getElementsByClassName("menu")[0].addEventListener('mouseenter', close); 
// document.getElementsByClassName("menu")[0].addEventListener('mouseleave', show);
// document.getElementsByClassName("punkt")[0].addEventListener('mouseleave', show);
// document.getElementsByClassName("punkt")[1].addEventListener('mouseleave', show);
// document.getElementsByClassName("punkt")[2].addEventListener('mouseleave', show);
// document.getElementsByClassName("punkt")[0].addEventListener('mouseenter', close); 
// document.getElementsByClassName("punkt")[1].addEventListener('mouseenter', close); 
// document.getElementsByClassName("punkt")[2].addEventListener('mouseenter', close); 

//   Зданаие 2
// const addText = (e) => {
//     const newText = document.createElement('new');
//     newText.innerText="asd";
//     document.getElementById("container").appendChild(newText);  
// }
// document.getElementById("add").addEventListener('click', addText); 

// const removeText = (e) => {
//     document.getElementById("container").lastChild.remove();
// }
// document.getElementById("delete").addEventListener('click', removeText); 

// Задание3
function drawFigure(type, color, top, left, width, height) {
    if (type == "круг" ) {
        let div = document.createElement('div');
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.borderRadius = "50%";
        div.style.width = width*2 + "px";
        div.style.height = width*2 + "px";
        div.style.position = "absolute";
        document.body.appendChild(div);
    } else if (type == "квадрат") {
        let div = document.createElement('div') 
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.width = width + "px";
        div.style.height = width + "px";
        div.style.position = "absolute";
        document.body.appendChild(div);   
    } else if (type == "прямоугольник") {
        let div = document.createElement('div') 
        div.style.background = color;
        div.style.top = top + "px";
        div.style.left = left + "px";
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
}
function addFigure(e) {
    if (e.code == "KeyQ") {
        drawFigure("круг", "red", 200, 300, 20);
    } else if (e.code == 'KeyW') {
        drawFigure("квадрат", "blue", 100, 200, 40);
    } else if (e.code == "KeyE") {
        drawFigure("прямоугольник", "green", 100, 200, 20, 100);
    }
}
window.addEventListener('keydown', addFigure);
