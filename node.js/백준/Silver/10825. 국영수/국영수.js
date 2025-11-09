const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const answer = [];
for(let i = 1 ; i <= N; i++){
     const [name, language, english, math] = input[i].split(" "); 
     answer.push([name, Number(language), Number(english), Number(math)]);
}
answer.sort((a, b) => {
    // 0이름 1국어 2영어 3수학
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[3] !== b[3]) return b[3] - a[3];
    return a[0] < b[0] ? -1 : 1;
});
console.log(answer.map(e=>e[0]).join("\n"));
