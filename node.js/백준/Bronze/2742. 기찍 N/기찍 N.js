const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4'....]
const N = Number(input[0]);
for(let i = N ; i >= 1  ; i--){
    console.log(i);
}