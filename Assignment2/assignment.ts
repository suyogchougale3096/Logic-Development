import {Fields} from './Data/data'
let fieldList = new Array();

// Q2
Array.prototype.push.apply(fieldList, Fields.Dimensions);
Array.prototype.push.apply(fieldList, Fields.Details);
Array.prototype.push.apply(fieldList, Fields.Hierarchies);
Array.prototype.push.apply(fieldList, Fields.Measures);


// Q3
const calculatedfields = fieldList.filter(value=>{
    if(value.calculatedFieldKey != undefined){
        return value.calculatedFieldKey;
    }
})
// console.log(calculatedfields)


// Q4
const pos = fieldList.findIndex(x=>{
    return x.entityName === 'Discount'
});

// console.log(pos)
// fieldList = fieldList.filter(function(obj) {
//     return obj.entityName !== 'Discount';
// });
fieldList.splice(pos,1)


// Q5
fieldList.forEach(function(obj){
    if(obj.entityName == 'City'){
        obj.isNumericDataType = true;
        obj.dataType = 'numerical'
    }
})

// Q6
let allArray = new Array()
for(let i = 0; i < calculatedfields.length; i++){
    allArray.push(...calculatedfields[i].variables);
}

let filterdArray = new Array();

allArray.map((x)=>{
    if(x.variableType == 'numerical'){
        filterdArray.push(x)
    }
})

// console.log(filterdArray)
// Q7
let dataIndex = new Array();
Fields.Dimensions.forEach((ob,i) => {
    if(ob.Parent == 'Order Date'){
        dataIndex.push(i);
    }
})

// Q8
let dimensionArray = new Array();
for(let i = 0; i < Fields.Dimensions.length; i++){
    dimensionArray[i] = i;
}

for(let i = 0; i < Fields.Dimensions.length; i++){
    let temp = dimensionArray[i];
    for(let j = 0; j < dataIndex.length; j++){
        if(temp == dataIndex[j]){
            console.log(Fields.Dimensions[temp])
        }
    }
}

// Q9


    Fields.Measures.forEach((obj)=>{
        let key :string = "datasetKey";
        let value = obj.datasetId;
        obj[key] = value;
        
    })

    console.log(Fields.Measures)




// Fields.Dimensions.map(function(obj){
//     obj.datasetKey = obj.datasetId;
//     delete obj.datasetId;
// })

// let c : string= "datasetKey"
// for(let i=0;i<Fields.Measures.length;i++){

//     delete Fields.Measures[i].datasetId;
   
// }

// Q10

fieldList.forEach((x)=>{
    if(x.variableType == 'geographical'){
        x.mappingDetails.unMappedLocationCount = 5;
    }
})

// Q11
let numericalItems = new Array()
fieldList.forEach((x)=>{
    if(x.isNumericDataType == true && x.dataType == 'float'){
        let val = x.subDatasetId;
        x.subDatasetId = x.datasetId;
        numericalItems.push(val)
    }
})

// console.log(numericalItems)


