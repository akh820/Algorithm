import java.util.*;

class Solution {
    public int[] solution(int[] prices) {
        List<Integer> answer = new ArrayList<>();
        
        for(int i = 0; i < prices.length-1; i++){
            int cnt = 0;
            int cv = prices[i];
            for(int j = i + 1; j < prices.length; j++){
                cnt++;
                if(cv > prices[j]) break;
            }
            answer.add(cnt);
        }
        answer.add(0);
        return answer.stream().mapToInt(i->i).toArray();
    }
}