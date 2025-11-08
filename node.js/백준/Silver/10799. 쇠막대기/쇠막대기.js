const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// ()(((()())(())()))(())
let count = 0;
let lineCount = 0;
let prevChar = "";
for(let e of input){
    if(e === "("){
        lineCount++
    } else {
        lineCount--;
        if(prevChar === "("){ // 전께 (였고 현재가 )이면 레이저
            count += lineCount;
        } else { // 막대기의 끝
            count += 1;
        }
    }
    prevChar = e;
}
console.log(count);