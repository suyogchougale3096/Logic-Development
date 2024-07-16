function countChar(str){
    let max = 0,temp = 0;
    let resultChar = '';
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        for(let j = 0; j < str.length; j++){
            if(char == str.charAt(j)){
                ++temp;
            }
        }
        if(temp > max){
            max = temp;
            resultChar = str.charAt(i)
        }
        temp = 0;
    }
    console.log(max,resultChar)
}

countChar('AABBCCC')