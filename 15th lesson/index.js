//Use to Break
for(let i = 0; i <= 100; i++){
    console.log(' ' + i)
    if(i == 10){
        break
    }
}


//Use continue
for(var i = 0; i <= 100; i++){
    if(i % 2 == 0){
        continue
    }
    console.log(' ' + i)
}
