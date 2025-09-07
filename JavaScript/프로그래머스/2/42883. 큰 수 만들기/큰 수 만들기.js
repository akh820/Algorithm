function solution(number, k) {
    //1924
    const stack = [];
    for(let i = 0 ; i < number.length; i++){
        const num = number[i];
        if(stack.length === 0){
            stack.push(num);
        } else {
            while(stack[stack.length-1] < num && k > 0){
                stack.pop();
                k--;
            }
            stack.push(num);
        }
    }
    stack.splice(stack.length - k,k);
    return stack.join("");
}