function solution(s){
    const stack = [];
    for(const alphabet of s){
        if(stack.length === 0 || alphabet !== stack[stack.length-1]){
            stack.push(alphabet);
        } else {
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}