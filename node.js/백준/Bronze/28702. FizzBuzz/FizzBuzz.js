const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer;
for(let i = input.length - 1; i >= 0 ; i--){
    if(input[i] !== "Fizz" && input[i] !== "Buzz" && input[i] !== "FizzBuzz"){
        answer = [i, Number(input[i])];
        break;
    } 
}
let num;
if(answer[0] === 2){
    num = answer[1] + 1;
} else if (answer[0] === 1){
    num = answer[1] + 2;
} else if (answer[0] === 0){
    num = answer[1] + 3;
}
if(num % 15 === 0){
    console.log("FizzBuzz");
} else if(num % 5 === 0) {
    console.log("Buzz");      
} else if(num % 3 === 0) {
    console.log("Fizz");      
} else {
    console.log(num);
}