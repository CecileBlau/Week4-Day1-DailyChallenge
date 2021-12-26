const gameInfo = [
{
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
},
{
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
},
{
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
},
{
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
},
];




//Create an array using forEach that contains all the usernames from the gameInfo array, 
//add an exclamation point (ie. “!”) to the end of every username.



// gameInfo.forEach((elem) => { 
//    let eachUsernames = ("Username: ", `${elem["username"]}!`) 
//    console.log(eachUsernames)
//    document.body.textContent = `${eachUsernames}`// why does it only show tyson?
// })






// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// TERNARY OPERATOR
// condition ? condition is true : condition is false


// function getTemp (temp) {
//    if (temp > 20) {
//       document.body.textContent = "Summer";
//    } else {
//       document.body.textContent = "Winter"
//    }
// }

// getTemp(24)


// function getTempOne (temp) {
//    temp > 20 ? document.body.textContent = "Summer" : document.body.textContent = "Winter";
// }

// getTempOne(24)


// function getTempTwo (temp) {
//    let season = temp > 20 ? "Summer" : "Winter";
//    document.body.textContent = season;
// }

// getTempTwo(24)


// const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";

// document.body.textContent = getTempThree(24)

// let classmates = ["Josh", "Lily", "Sophie", "Mark"];
// classmates.forEach((elem, ind, arr) => elem === "Sophie" ? arr[ind] += "&" : arr[ind] += "!")
// console.log(classmates)






gameInfo.forEach((elem) =>{
   let score = elem["score"]; 
   let scoreUp5 = score>5 ?  elem["username"] : " ";
   console.log(scoreUp5)})











// Find and display the total score of the users.