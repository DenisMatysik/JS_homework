//  Data i vremia
// Task1
// let date = new Date(2019, 11, 18, 12, 20);
// console.log(date);

// Task2
// let date1 = new Date(2000, 2, 4);
// let day = date1.getDay();
// switch (day) {
//   case 0:
//     console.log("Ponedeln");
//     break;
//   case 1:
//     console.log("Vtornik");
//     break;
//   case 2:
//     console.log("Sreda");
//     break;
//   case 3:
//     console.log("Chetverg");
//     break;
//   case 4:
//     console.log("Piatnitsa");
//     break;
//   case 5:
//     console.log("Subbota");
//     break;
//   case 6:
//     console.log("Voskres");
//     break;
// }
// console.log(day);

//Task3
// let date = new Date();
// date.setTime(1590749435756);
// console.log(date.getDate() + " " + date.getMonth() + " " + date.getFullYear() + " " + date.getHours() + " " + date.getMinutes;)

//JSON
// let user = {
//   name: "User photo",
//   size: "200 X 200",
// };
// user = JSON.stringify(user);
// let pasreJson = JSON.parse(user);
// console.log(user);
// console.log(pasreJson);

// Bolee slojnie funkcii
//Task1
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8