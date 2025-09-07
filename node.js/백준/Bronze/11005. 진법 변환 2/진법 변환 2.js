const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ');
console.log(Number(a).toString(Number(b)).toUpperCase());

