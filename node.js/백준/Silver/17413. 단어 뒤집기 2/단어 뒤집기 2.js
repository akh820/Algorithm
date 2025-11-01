const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = ''; 
let stack = [];
let isBracket = false;

for (let e of input) {
    if (e === '<') {
        isBracket = true;
        if (stack.length > 0) {
            answer += stack.reverse().join('');
            stack = []; 
        }
        stack.push(e); 
    } else if (e === '>') {
        isBracket = false;
        stack.push(e); 
        answer += stack.join('');
        stack = []; 
    } else if (isBracket) {
        stack.push(e);
    } else {
        if (e === ' ') {
            answer += stack.reverse().join('');
            stack = []; 
            answer += e;
        } else {
            stack.push(e);
        }
    }
}

if (stack.length > 0) {
    answer += stack.reverse().join('');
}

console.log(answer);