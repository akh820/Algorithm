import java.util.Stack;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < s.length() ; i++){
            char current = s.charAt(i);
            
            if(current == '('){
                stack.push(current);
            } else {
                if(stack.isEmpty()){
                    answer = false;
                } else {
                    if(stack.peek() == '(') {
                        stack.pop();
                    } else {
                        answer = false;
                    }
                }
            }
        }
        if(!stack.isEmpty()) answer = false;
        return answer;
    }
}