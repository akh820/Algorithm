const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let prev = 0;
let now = 1;
let next = prev + now;

if(N <= 1) {
    console.log(N);
} else {
    for(let i = 2 ; i <= N ; i++){
    next = prev + now; // next = 1, 2, 3, 5
    prev = now; // prev = 1, 1, 2, 3
    now = next; // now = 1, 2, 3, 5
    }
    console.log(next);
}