count = 5;
for(let i = 1; i <=5; i++){
    for(let space = count; space >= 1; space--){
        process.stdout.write(" ")
    }
    count--;
    
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}
