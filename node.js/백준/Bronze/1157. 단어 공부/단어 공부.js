const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const word = String(input[0]).toUpperCase();

const object = {};
for(const e of word){
    if(object[e]){
        object[e] += 1;
    } else {
        object[e] = 1;
    }
}

const list = [];
for(const [key, value] of Object.entries(object)){
    list.push([key,value]);
}

list.sort((a,b) => b[1] - a[1]);

if (list.length > 1 && list[0][1] === list[1][1]) {
    console.log("?");
} else {
    console.log(list[0][0]);
}