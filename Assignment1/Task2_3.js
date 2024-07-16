function pattern(num){
    for(let i = 1; i <= num; i++){
        for(let j = num; j >= i; j--){
            process.stdout.write("*")
        }
        console.log()
    }
}

pattern(5);