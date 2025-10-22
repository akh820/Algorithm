const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for(let i = 1 ; i <= N; i++){
    let totalScore = 0;
    let unitScore = 0;
    for(let j = 0 ; j < input[i].length; j++){
        if(input[i][j] === "O"){
            unitScore++;  
        } else {
            unitScore = 0;
        }
        totalScore += unitScore;
    }
    console.log(totalScore);
}
