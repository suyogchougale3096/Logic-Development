function insertionSort(arr1){
    let i,j,temp;
    for(i = 1; i < arr1.length; i++){
        temp = arr1[i];
        j = i -1;
        while(j >= 0 && temp <= arr1[j]){
            arr1[j+1] = arr1[j];
            j = j -1;
        }
        arr1[j+1] = temp
    }
    console.log(arr1)
}

insertionSort([5,4,3,2,1])