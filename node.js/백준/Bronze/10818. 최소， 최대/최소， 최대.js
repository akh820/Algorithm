const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = -1000000;
let min = 1000000;
// input[1] = '20 10 35 30 7'
// input[1].split(" ") = [20,10,35,30,7];

for(const e of input[1].split(" ").map(Number)){
    max = Math.max(max, e);
    min = Math.min(min, e);
}
console.log(`${min} ${max}`);