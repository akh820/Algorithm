function solution(number, k) {
    const stack = [];
    
    for (const digit of number) {
        while (stack.length > 0 && stack[stack.length - 1] < digit && k > 0) {
            stack.pop(); 
            k--;         
        }
        stack.push(digit); 
    }
    
    stack.splice(stack.length - k, k);    
    return stack.join("");
}
