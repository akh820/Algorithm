function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && k > 0 && number[i] > stack[stack.length - 1]) {
        stack.pop();
        k--;
    }
    stack.push(number[i]);
  }

  stack.splice(number.length - k, k);

  return stack.join("");
}