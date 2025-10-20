const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4'....]
const N = Number(input[0]);

let star = "";
const final = "*".repeat(N);

for(let i = 1 ; i < N ; i++){
    let spaceCount = N - i; // spaceCount = 4,3,2,1
    let space = "";
    for(let j = 0 ; j < spaceCount; j++){
        space += " ";
    }
    star += "*";
    console.log(space + star);
}
console.log(final);