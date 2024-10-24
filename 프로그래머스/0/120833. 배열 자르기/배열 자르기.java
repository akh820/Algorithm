import java.util.*;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        ArrayList<Integer> abc = new ArrayList<>();
        for(int i = num1 ; i <= num2; i++){
            abc.add(numbers[i]);
        }
        
        int[] answer = new int[abc.size()];
        for(int i = 0; i < abc.size() ; i++){
            answer[i] = abc.get(i);
        }
        return answer;
    }
}