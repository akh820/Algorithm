function solution(s){
    const stack = [];
    for(const alphabet of s){
        if(stack.length === 0){
            stack.push(alphabet);
        } else {
            const top = stack[stack.length-1];
            if(alphabet === top){
                stack.pop();
            } else {
                stack.push(alphabet);
            }
        }
    }
    if(stack.length === 0) {
        return 1
    } else {
        return 0;
    };
}