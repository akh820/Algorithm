// /* readline Module */
//
// // 문제 풀이
// function solution(input) {
//
//     // 답변 출력
//     console.log(input);
//
// }
//
//
//
// /* readline Module */
// const readline = require("readline");
// const rl = readline.createInterface({
//
//     input: process.stdin,
//     output: process.stdout,
//
// });
//
//
// let input;
//
// rl.on("line", function (line) {
//
//     input = line;           // 입력받은 문자열, line
//     input = parseInt(line); // 형변환, parseInt
//     rl.close();             // 입력 종료
//
// }).on("close", function () {
//
//     solution(input); // 문제 풀이 함수 호출
//     process.exit();  // 프로세스 종료
//
// });

/* readline Module */

// 문제 풀이
function solution(input) {

    // 답변 출력, list
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(sum)
}



/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

});


let input;
let list = [];

rl.on("line", function (line) {

    input = line; // 입력받은 문자열, line
    rl.close();   // 입력 종료

}).on("close", function () {

    // 형변환, 구분자(띄어쓰기)기준으로 배열에 삽입
    list = input.split(' ').map((el) => Number(el));

    solution(list); // 문제 풀이 함수 호출
    process.exit(); // 프로세스 종료
});