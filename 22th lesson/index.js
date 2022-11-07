//2D dimentional array
/*
Make a function called highestRunScorer that will 
-Receive a 2d array called playersInfo
-Based on highest score, return the name of the player

Things required
=Variable
=if - else
=Loop
=Function
=Array
*/


function highestRunScorer(playersInfo){
    //we take
    var highestRunner= arr[0][0] 
    var highestRun = arr[0][1]
    //logic
    for (var x = 0; x < arr.length; x++){
        if(highestRun < playersInfo[x][1]){
            highestRun = playersInfo[x][1]
            highestRunner = playersInfo[x][0]
        }
    }
    return highestRunner
}
let arr = [
    ['Sakbi', 50],
    ['Rubal', 40],
    ['Taskin', 80],
    ['Mehide', 90],
    ['Miraj', 20]
]
var highestRunPlayer = highestRunScorer(arr)
console.log(highestRunPlayer)













