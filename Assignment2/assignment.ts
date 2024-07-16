import {Fields} from './Data/data'
let fieldList = new Array();

// Q2
Array.prototype.push.apply(fieldList, Fields.Dimensions);
Array.prototype.push.apply(fieldList, Fields.Details);
Array.prototype.push.apply(fieldList, Fields.Hierarchies);
Array.prototype.push.apply(fieldList, Fields.Measures);


// Q3
const calculatedfields = fieldList.filter(value=>{
    if(value.calculatedFieldKey){
        return value.calculatedFieldKey;
    }
})
// console.log(calculatedfields)


// Q4
const pos = fieldList.map(e => e.entityName).indexOf('Discount');
// console.log(pos)
fieldList = fieldList.filter(function(obj) {
    return obj.entityName !== 'Discount';
});
// console.log(fieldList);

// Q5

fieldList = fieldList.filter(function(obj){
    if(obj.entityName == 'City'){
        obj.isNumericDataType = true;
        obj.dataType = 'numerical'
    }
    return obj;
})

// console.log(fieldList)

// Q6


// Q7
let count = 0;
let dataIndex = new Array();
Fields.Dimensions.map((x) => {
    x.Parent == 'Order Date'?  dataIndex.push(count): 0;
    count++;
})


// let dataIndex = new Array();
// Fields.Dimensions.forEach((x,y)=>{
//     if(x.Parent == 'Order Data'){
//         dataIndex.push(y);
//     }
// })

// console.log(dataIndex)







