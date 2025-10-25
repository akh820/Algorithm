const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const string of input) {
    if (string === ".") {
        break;
    }

    const stack = [];
    let isValid = true; 

    for (const e of string) {
        if (e === "(" || e === "[") {
            stack.push(e);
        } else if (e === ")") {
            if (stack.length === 0 || stack.pop() !== "(") {
                isValid = false;
                break; 
            }
        } else if (e === "]") {
            if (stack.length === 0 || stack.pop() !== "[") {
                isValid = false;
                break; 
            }
        }
    }

    if (isValid && stack.length === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}