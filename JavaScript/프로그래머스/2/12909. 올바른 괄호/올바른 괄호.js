function solution(s){
    const stack = [];
    for(const e of s){
        if(e === '(' ){
            stack.push(e);
        }else if( e === ')' ){
            if(stack.length === 0){
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return stack.length === 0;
}