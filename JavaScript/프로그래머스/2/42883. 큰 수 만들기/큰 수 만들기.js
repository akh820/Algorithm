function solution(number, k){
    const stack = [];
        for(let i = 0 ; i < number.length; i++){
            //11999
            while(stack.length > 0 && stack[stack.length - 1] < number[i] && k > 0){
                stack.pop();
                k--;
            } // 9
            stack.push(number[i]); // 11
        }
    
    stack.splice(stack.length - 1, k);
    return stack.join("");
}