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

const url = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
    console.log("start")
    let logMass = ["Bret","Karianne","Elwyn.Skiles","Moriah.Stanton"]
    const masLog = await fetch(url)
    let logInfo = await masLog.json()
    
    for (let i=0;i<logInfo.length;i++) {
        let userNameMass = logInfo[i].username;
        console.log(userNameMass);
        for (let j=0; j<logMass.length;j++) {
            if ( logMass[j] === userNameMass){
                console.log("Takoi polzovatek est")
            }
            else {console.log("kakoito chert")}
        }
        }

    //     for( let j=0; j<logMass;j++){
    //         if( logMass[j] === userNameMass ) {
    //             console.log("taloi login est")
    //         }
    //         else{
    //             console.log("takogo logina net")
    //         }
            
    console.log(logInfo)
}


getUsers()