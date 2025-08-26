function solution(number, k){

  const stack = [];
  let i = 0;
  
  while(i < number.length){
    while(stack[stack.length-1] < number[i] && k > 0){
      stack.pop();
      k--;
    }
    stack.push(number[i]);
    i++;
  }
    stack.splice(stack.length-k, k);


  return stack.join("");
}