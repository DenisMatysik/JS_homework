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

const requestUrl = "https://test-todoist.herokuapp.com/api/tasks";

const xhr = new XMLHttpRequest();

    xhr.open("GET", requestUrl)

xhr.onload = () =>{
    if (xhr.status >=400) {
        console.error(xhr.response)
    }
    else {
    console.log(JSON.parse(xhr.response))
    }
}

xhr.onerror = () =>{
    console.log(xhr.response)
}

xhr.send()