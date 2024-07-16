myDict = {
    'Ashwin' : 100,
    'rakesh' :9,
    'Ravindra' : 25,
    'yash' : 200,
    'sai' : 32
}

let orderedData = Object.keys(myDict).sort().reduce((accumulator,key) => {
    accumulator[key] = myDict[key]
    return accumulator
},{});

console.log(orderedData)