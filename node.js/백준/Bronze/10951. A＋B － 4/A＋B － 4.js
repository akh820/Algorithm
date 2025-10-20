const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ['1 1', '2 3', '3 4'....]
for(const e of input){
    const [a, b] = e.split(" ").map(Number);
    console.log(a+b);
}