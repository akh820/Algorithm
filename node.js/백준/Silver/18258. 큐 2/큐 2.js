const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const queue = []; 
const answer = []; 

let head = 0; 

for (let i = 1; i <= N; i++) {
    const [order, value] = input[i].split(' ');
    
    const currentSize = queue.length - head;

    switch (order) {
        case "push":
            queue.push(Number(value)); 
            break;
        case "pop":
            if (currentSize === 0) {
                answer.push(-1);
            } else {
                answer.push(queue[head]);
                head++;
            }
            break;
        case "size":
            answer.push(currentSize); 
            break;
        case "empty":
            answer.push(currentSize === 0 ? 1 : 0);
            break;
        case "front":
            if (currentSize === 0) {
                answer.push(-1);
            } else {
                answer.push(queue[head]); 
            }
            break;
        case "back":
            if (currentSize === 0) {
                answer.push(-1);
            } else {
                answer.push(queue[queue.length - 1]); 
            }
            break;
    }
}

console.log(answer.join('\n'));