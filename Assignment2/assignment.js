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
// Q8
var dimensionArray = new Array();
for (var i = 0; i < data_1.Fields.Dimensions.length; i++) {
    dimensionArray[i] = i;
}
for (var i = 0; i < data_1.Fields.Dimensions.length; i++) {
    var temp = dimensionArray[i];
    for (var j = 0; j < dataIndex.length; j++) {
        if (temp == dataIndex[j]) {
            // console.log(Fields.Dimensions[temp])
        }
    }
}
// Q9
data_1.Fields.Measures.forEach(function (obj) {
    console.log(obj);
});
// Fields.Dimensions.map(function(obj){
//     obj.datasetKey = obj.datasetId;
//     delete obj.datasetId;
// })
// Q10
fieldList.filter(function (val) {
    if (val.variableType === 'geographical') {
        return val.mappingDetails.unMappedLocationCount = 5;
    }
});
// console.log(fieldList)
// Q11
