//Task -8
/*
Make a function called highestScore that will
1. Receive a 1D array calld scores
2. return the highest score

Things required
-Variable
-if-else
-Loop
-Function
-Array
*/
// var arr = new Array()
console.clear()
function highestScore(score){
    let max = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(max < score[i]){
            max = score[i] 
          }
    }
    return max 
}
var arr = [50, 60, 80, 40, 30, 20]

console.log(highestScore(arr))





