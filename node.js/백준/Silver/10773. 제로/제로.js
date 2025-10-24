const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = Number(input[0]);
const stack = [];
for(let i = 1 ; i < input.length; i++){
    const num = Number(input[i]);
    if(num === 0){
        stack.pop();
    } else {
        stack.push(num);
    }
}
console.log(stack.reduce((acc,cur) => acc + cur, 0));