"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./Data/data");
var fieldList = new Array();
// Q2
Array.prototype.push.apply(fieldList, data_1.Fields.Dimensions);
Array.prototype.push.apply(fieldList, data_1.Fields.Details);
Array.prototype.push.apply(fieldList, data_1.Fields.Hierarchies);
Array.prototype.push.apply(fieldList, data_1.Fields.Measures);
// Q3
var calculatedfields = fieldList.filter(function (value) {
    if (value.calculatedFieldKey) {
        return value.calculatedFieldKey;
    }
});
// console.log(calculatedfields)
// Q4
var pos = fieldList.map(function (e) { return e.entityName; }).indexOf('Discount');
// console.log(pos)
fieldList = fieldList.filter(function (obj) {
    return obj.entityName !== 'Discount';
});
// console.log(fieldList);
// Q5
fieldList = fieldList.filter(function (obj) {
    if (obj.entityName == 'City') {
        obj.isNumericDataType = true;
        obj.dataType = 'numerical';
    }
    return obj;
});
// console.log(fieldList)
// Q6
// Q7
var count = 0;
var dataIndex = new Array();
data_1.Fields.Dimensions.map(function (x) {
    x.Parent == 'Order Date' ? dataIndex.push(count) : 0;
    count++;
});
// let dataIndex = new Array();
// Fields.Dimensions.forEach((x,y)=>{
//     if(x.Parent == 'Order Data'){
//         dataIndex.push(y);
//     }
// })
console.log(dataIndex);
