function solution(board, moves) {
    const stack = [];
    let answer = 0;
    for(const move of moves){
        const line = move - 1;
        for(let depth = 0 ; depth < board.length; depth++){
            if(board[depth][line] === 0){
                continue;
            } else { //인형이 있는경우, 0이 아닌경우
                if(stack.length > 0 && stack[stack.length-1] === board[depth][line]){
                    stack.pop();
                    board[depth][line] = 0;
                    answer += 2;
                } else {
                    stack.push(board[depth][line]);
                    board[depth][line] = 0;
                }
                break;
            }
        }
    }
    return answer;
}