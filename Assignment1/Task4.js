function isPalindrome(num){
    let temp = num, rev = 0;
    while(temp > 0){
        rem = temp % 10;
        rev = rev * 10 + rem;
        temp =Math.floor(temp / 10);
    }
    console.log((rev === num)?"Palindrome":"Not plaindrome")
}

isPalindrome(101)