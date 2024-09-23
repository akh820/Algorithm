const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line) => {
    input = line;
    rl.close();  // 한 줄 입력을 받은 후 바로 입력을 종료
});

rl.on('close', () => {
    switch (input) {
        case 'A+':
            console.log('4.3')
            break;
        case 'A0':
            console.log('4.0')
            break;
        case 'A-':
            console.log('3.7')
            break;
        case 'B+':
            console.log('3.3')
            break;
        case 'B0':
            console.log('3.0')
            break;
        case 'B-':
            console.log('2.7')
            break;
        case 'C+':
            console.log('2.3')
            break;
        case 'C0':
            console.log('2.0')
            break;
        case 'C-':
            console.log('1.7')
            break;
        case 'D+':
            console.log('1.3')
            break;
        case 'D0':
            console.log('1.0')
            break;
        case 'D-':
            console.log('0.7')
            break;
        case 'F':
            console.log('0.0')
        default:
            break;

    }
    // 강제 종료 없이 close 이벤트에서만 처리
    // process.exit();
});
