function prime_number(start, end) {
    let prime_numbers = new Array()
    for(let i = start; i <= end; i++){
        let temp = i;
        let count = 0;
        for(let j = 1; j <= temp; j++){
            if(temp % j == 0){
                count++;
            }
        }
        if(count == 2){
            prime_numbers.push(temp)
        }
    }
    console.log(prime_numbers)
}

prime_number(1, 100);

