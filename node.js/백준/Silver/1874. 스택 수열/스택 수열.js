const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); //8 개수가져와서 변환 맞고

let index = 1; 
const stack = [];
const print = []; // 출력할꺼 빼놓고
for(let i = 1 ; i <= N ; i++){
    stack.push(i);
    print.push("+");
    while(stack.length > 0 && stack[stack.length - 1] == input[index]){
        stack.pop();
        print.push("-");
        index++;
    }
}
console.log(stack.length === 0 ? print.join("\n"):"NO");