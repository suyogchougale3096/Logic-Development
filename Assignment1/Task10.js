function linear_search(arr1,searchKey){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == searchKey){
            return i;
        }
    }
    return -1;
}

const arr1 = [1,3,5,90,12,11,91]
const searchKey = 9;
const pos = linear_search(arr1,searchKey);

if(pos != -1){
    console.log("The value is present at position : ", pos);
}else{
    console.log("The value is not present in current array.")
}