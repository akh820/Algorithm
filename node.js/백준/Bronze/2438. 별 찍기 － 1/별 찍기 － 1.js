const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4'....]
const N = Number(input[0]);
let star = "";
for(let i = 0 ; i < N ; i++){
    star += "*";
    console.log(star);
}