function solution(number, k) {
    const stack = [];
    for(const e of number){
        const num = Number(e);
        while(stack.length > 0 && stack[stack.length - 1] < num && k > 0){ 
                stack.pop();
                k--;
        }
        stack.push(num);        
    }
    stack.splice(stack.length - k, k);
    return stack.join("");
}