const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//['734','893'] => ['437','398']
const a = Math.max(...input[0].split(" ").map(e => e.split("").reverse().join("")).map(Number));
console.log(a);