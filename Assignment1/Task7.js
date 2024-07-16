function addition(arr1,arr2){
    const result = [];
    for(let i = 0; i < arr1.length; i++){
        const rowData = [];
        for(let j = 0; j < arr1[i].length; j++){
            rowData.push(arr1[i][j] + arr2[i][j])
        }
        result.push(rowData);
    }
    console.log(result)
}

function substraction(arr1,arr2){
    const result = [];
    for(let i = 0; i < arr1.length; i++){
        const rowData = [];
        for(let j = 0; j < arr1[i].length; j++){
            rowData.push(arr1[i][j] - arr2[i][j])
        }
        result.push(rowData);
    }
    console.log(result)
}

const arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

addition(arr1,arr2)
substraction(arr1,arr2)