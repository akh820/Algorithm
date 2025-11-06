const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);

const queue = [];
const answer = [];

const exec = (val) => {
    const [order, num] = val.split(" ");
    switch(order){
        case "push_front":
            queue.unshift(num);
            break;
        case "push_back":
            queue.push(num);
            break;
        case "pop_front":
            if(queue.length > 0){
                answer.push(queue.shift());            
            } else {
                answer.push(-1);
            }
            break;
        case "pop_back":
            if(queue.length > 0){
                answer.push(queue.pop());            
            } else {
                answer.push(-1);
            }
            break;
        case "size":
            answer.push(queue.length);
            break;
        case "empty":
            if(queue.length > 0){
                answer.push(0);
            } else {
                answer.push(1);
            }
            break;
        case "front":
            if(queue.length > 0){
                answer.push(queue[0]);
            } else {
                answer.push(-1);
            }
            break;
        case "back":
            if(queue.length > 0){
                answer.push(queue[queue.length-1]);
            } else {
                answer.push(-1);
            }
        break;
    }
}

for(let i = 1 ; i <= N; i++){
    exec(input[i]);
}
console.log(answer.join("\n"));

