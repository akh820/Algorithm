function solution(s) {
    // let count = 0;
    // for(const e of s){
    //     if(e === '('){
    //         count++;
    //     } else {
    //         if(count === 0) return false;
    //         count--;
    //     }
    // }
    // return count === 0;
    return correctBracket(s);
}

function correctBracket(string){
        const stack = [];
        for(let i = 0 ; i < string.length; i++){
            const bracket = string[i];
            if(bracket === "("){
                stack.push(bracket);
            } else { // ")"
                if(stack.length === 0){
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return stack.length === 0;
    }

