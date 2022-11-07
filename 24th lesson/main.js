// Guessing Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// if the guess number matches random number ; then show message won elsa lost 
// Run the game for 5 times
// show the number of wons and losts

let youWon = 0
let youLost = 0

for(let i = 1; i <= 5; i++){

    let guessNumber = parseInt(prompt('Enter a number from 1 to 5 : '))
    let randomNumber = Math.floor(Math.random()*5) + 1

    if (guessNumber === randomNumber ){
        console.log("You have won!")
        youWon++//adding  1 number
    }else{
        console.log("Yor have lost! Random number was :" + randomNumber)
        youLost++//adding 1 number
    }
}

document.write('Total Number of Won = ' + youWon + '<br/>' + '<br/>')
document.write('Total Number of Lost = ' + youLost)