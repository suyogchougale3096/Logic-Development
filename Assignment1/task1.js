let odd = new Array();
let even = new Array();

for(let i = 1; i < 101; i++){
    (i % 2 != 0) ? odd.push(i) : even.push(i) 
}

console.log(odd)
console.log(even)