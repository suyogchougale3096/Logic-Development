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
    if (value.calculatedFieldKey != undefined) {
        return value.calculatedFieldKey;
    }
});
// console.log(calculatedfields)
// Q4
var pos = fieldList.findIndex(function (x) {
    return x.entityName === 'Discount';
});
// console.log(pos)
// fieldList = fieldList.filter(function(obj) {
//     return obj.entityName !== 'Discount';
// });
fieldList.splice(pos, 1);
// Q5
fieldList.forEach(function (obj) {
    if (obj.entityName == 'City') {
        obj.isNumericDataType = true;
        obj.dataType = 'numerical';
    }
});
// Q6
var allArray = new Array();
for (var i = 0; i < calculatedfields.length; i++) {
    allArray.push.apply(allArray, calculatedfields[i].variables);
}
var filterdArray = new Array();
allArray.map(function (x) {
    if (x.variableType == 'numerical') {
        filterdArray.push(x);
    }
});
// console.log(filterdArray)
// Q7
var dataIndex = new Array();
data_1.Fields.Dimensions.forEach(function (ob, i) {
    if (ob.Parent == 'Order Date') {
        dataIndex.push(i);
    }
});
// Q8
var dimensionArray = new Array();
for (var i = 0; i < data_1.Fields.Dimensions.length; i++) {
    dimensionArray[i] = i;
}
for (var i = 0; i < data_1.Fields.Dimensions.length; i++) {
    var temp = dimensionArray[i];
    for (var j = 0; j < dataIndex.length; j++) {
        if (temp == dataIndex[j]) {
            console.log(data_1.Fields.Dimensions[temp]);
        }
    }
}
// Q9
data_1.Fields.Measures.forEach(function (obj) {
    var key = "datasetKey";
    var value = obj.datasetId;
    obj[key] = value;
});
console.log(data_1.Fields.Measures);
// Fields.Dimensions.map(function(obj){
//     obj.datasetKey = obj.datasetId;
//     delete obj.datasetId;
// })
// let c : string= "datasetKey"
// for(let i=0;i<Fields.Measures.length;i++){
//     delete Fields.Measures[i].datasetId;
// }
// Q10
fieldList.forEach(function (x) {
    if (x.variableType == 'geographical') {
        x.mappingDetails.unMappedLocationCount = 5;
    }
});
// Q11
var numericalItems = new Array();
fieldList.forEach(function (x) {
    if (x.isNumericDataType == true && x.dataType == 'float') {
        var val = x.subDatasetId;
        x.subDatasetId = x.datasetId;
        numericalItems.push(val);
    }
});
// console.log(numericalItems)
