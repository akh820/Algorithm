// 백준 표준 템플릿
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(" ").map(Number);
console.log(a + b);