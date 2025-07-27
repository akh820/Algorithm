function solution (s) {
    const stack = [];
    for(const e of s){
        const peek = stack[stack.length-1];
        if(stack.length === 0){
            if(e === '(') stack.push(e);
            else if (e === ')') return false;
        } else {
            if(e === ')'){
                if(peek === '('){
                    stack.pop();
                } else if (peek === ')') stack.push(e);
            } else if ( e === '(') stack.push(e);
        }
    }
    return stack.length === 0 ? true : false;
}