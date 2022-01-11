// Preza 17 setevie zaprosi
// Task1
// const url = 'https://test-todoist.herokuapp.com/api/tasks'

// async function getTask () {
//     const response = await fetch(url)
//     const data = await response.json()
//     for (let i=0;i<data.length; i++){
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = `Task №${i+1} ${data[i].description}`;
//     document.body.appendChild(newDiv)  
//     console.log(data)}
//     }
//     getTask()





// Task2

// const getGitUsersData = async function (userNames){
//     const users = [];
//     for( const user of userNames){
//         let userData = await getGitUserData(user);
//         users.push(userData);
//     }
//     return users;
// }

// const getGitUserData = async function(username){
//     return fetch(`https://api.github.com/users/${username}`)
//     .then((res) =>{
//         return res.json();
//     });
// }
// getGitUsersData(["OlgaSon","Vikentsiy"]).then(data => console.log(data));

// Task3

const url = 'https://test-todoist.herokuapp.com/api/categories'
const dataPost = { name: "Some post"}

async function getTask () {
    const response = await fetch(url)
    const data = await response.json()
    for (let i=0;i<data.length; i++){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `Task №${i+1} ${data[i].name}`;
    document.body.appendChild(newDiv)  
    console.log(data)}
    }
    getTask()

// post zapros
async function sendPost (){
     const responseNext = await fetch(url, {
         method: 'POST',
         body:JSON.stringify(dataPost),
         headers:{
             'Content-Type': 'application/json'
         }
     })   
}

document.querySelector(".btnPost").addEventListener("click", sendPost)