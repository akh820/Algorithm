function solution(name) {
    let upDownCount = 0;
    for (const char of name) {
        upDownCount += minUpDownMove(char);
    }

    let minMove = name.length - 1; 

    for (let i = 0; i < name.length; i++) {
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }

        const moveRightThenTurn = (i * 2) + (name.length - nextIndex);
        const moveLeftThenTurn = ((name.length - nextIndex) * 2) + i;

        minMove = Math.min(minMove, moveRightThenTurn, moveLeftThenTurn);
    }

    return upDownCount + minMove;
}

function minUpDownMove(alphabet) {
    const targetCode = alphabet.charCodeAt(0);
    return Math.min(targetCode - 65, 91 - targetCode);
}