// Loop & Array
var num = new Array()
for(var i = 0; i < 3; i++){
    num[i] = parseInt(prompt("Enter a Number :"))
}

var sum = 0
for(var i = 0; i < 3; i++){
    console.log(num[i])
    sum = sum + num[i]
}
console.log('sum = ' + sum)