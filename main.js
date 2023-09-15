console.log("Hello World")

let player1;
let player2;
let computer;
let score1 = 0
let score2 = 0

playerChoice = prompt("Select One or Two Player Mode...", "enter 1 or 2")
if (playerChoice === "1") {
    player1 = prompt("Enter Your Name", "Enter Name") 

}
else if (playerChoice === "2") {
    player1 = prompt("Enter Your Name", "Enter Name")
    player2 = prompt("Enter Your Name", "Enter Name")

} 

//function play(playerChoice, player){
    const choices= ['rock', 'paper', 'sissores'];
   // const compChoice= choice[Math.floor(Math.random() * 3)];
   // console.log(choices[0]) 
//}


player1Choice = prompt(`${player1}, enter your Selection`, '1. rock, 2. paper 3.sissores')
// let firstChoice

// if(player1Choice === 1) {
//     let firstChoice = "Rock"
// }else if (player1Choice === 2) {
//     let firstChoice = "Paper"
// }else(player1Choice === 3); {
//     let firstChoice = "Scissors"
// }

player2Choice = prompt(`${player2}, enter your Selection`, '1. rock, 2. paper 3.sissores')
// let secondChoice 
// if (player2Choice === 1) {
//     secondChoice = "Rock";
// } else if (player2Choice === 2) {
//     secondChoice = "Paper";
// } else if (player2Choice === 3) {
//     secondChoice = "Scissors";
// } 
// if(player2Choice === 1) {
//     let secondChoice = "Rock";
// }else if (player2Choice === 2) {
//     let secondChoice = "Paper";
// }else(player2Choice === 3); {
//     let secondChoice = "Scissors";
// }

if (player1Choice === player2Choice){
    alert ("Game is tied")
console.log('Game is tied')
}
else if((player1Choice === 1 && player2Choice === 3)||(player1Choice === 2 && player2Choice === 1)||(player1Choice === 3 && player2Choice === 2)){
    alert (`${player1} wins! `);
    // let score1= score1 + 1
// console.log(score1)
}
else {
    alert (`${player2} wins!`);
    // let score2= score2 + 1
// console.log('score2')
}
// ${player2}'s ${secondChoice} beats ${player1}'s ${firstChoice}  
function score( ){
    console.log(`${score1}`)
}

