const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);
let totalScore = 0;
let max = Math.max(...scores);

for(const score of scores){
    totalScore += newScore(score, max);
}

console.log(`${totalScore / N}`)

function newScore(score, max){
    return (score / max) * 100;
}

