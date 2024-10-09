import java.util.*;

class Solution {
    public int[] solution(int n, int[] numlist) {
        ArrayList<Integer> test = new ArrayList<>();
        for(int e : numlist){
            if( (e % n == 0) ){
                test.add(e);
            }
        }
        int[] answer = new int[test.size()];
        for(int i = 0; i < answer.length ; i++){
            answer[i] = test.get(i);
        }
        return answer;
    }
}