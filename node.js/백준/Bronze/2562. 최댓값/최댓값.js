const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const args = input.map(Number);

let max = 1;
let index = 1;

for(let i = 0 ; i < args.length; i++){
    if(args[i] > max){
        max = args[i];
        index = i;
    }
}
console.log(`${max}\n${index+1}`);