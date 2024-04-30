import java.util.*;

class Solution {
    public int[] solution(int n) {
        List<Integer> answer = new ArrayList<>();
        for(int i = 1; i <= n; i++) { // i 변수에 int 타입 명시
            if(i % 2 == 1) {
                answer.add(i);
            }
        }
        // List를 int 배열로 변환
        int[] result = new int[answer.size()];
        for(int i = 0; i < answer.size(); i++) {
            result[i] = answer.get(i);
        }
        return result;
    }
}
