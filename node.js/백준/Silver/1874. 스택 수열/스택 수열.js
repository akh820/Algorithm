const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); //8 개수가져와서 변환 맞고

let list = 1; // 수열 넣을꺼 빼놓고
const stack = [];
const print = []; // 출력할꺼 빼놓고
for(let i = 1 ; i <= N ; i++){
    const num = Number(input[i]); 
    while(true){ // 1 <= 8
        if(stack.length !== 0 && (num === stack[stack.length-1])){
            stack.pop();
            print.push("-");
            break;
        } else {
            if(list > N) break;
            stack.push(list);
            list++;
            print.push("+");
        }
    }
}
if(stack.length === 0){
    for(const e of print){
        console.log(e);
    }
} else {
    console.log("NO");
}
