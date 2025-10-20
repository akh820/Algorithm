const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4'....]
for(let i = 1 ; i <= 9; i++){
    console.log(`${Number(input[0])} * ${i} = ${Number(input[0])*i}`);
}