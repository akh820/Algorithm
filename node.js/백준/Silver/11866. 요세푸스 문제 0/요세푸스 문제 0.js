const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim()

const [N, K] = input.split(" ").map(Number);
const list = Array(N).fill(false);
/*
 1 2 3 4 5 6 7
[F,F,F,F,F,F,F]
*/

let trueCount = 0;
let kCount = 0;
let answer = [];
while(trueCount < N){
    for(let i = 0 ; i < list.length; i++){
        if(kCount === K-1 && list[i] === false){
            list[i] = true;
            trueCount++;
            kCount = 0;
            answer.push(i+1);
        }
        if(list[i] === false){
            kCount++;
        }
    }
}
console.log(`<${answer.join(", ")}>`);
/*
1234567
12 4567 => 3
12 45 7 => 6
1  45 7 => 2
1  45   => 7
1  4    => 5
   4    => 1
        => 4
*/