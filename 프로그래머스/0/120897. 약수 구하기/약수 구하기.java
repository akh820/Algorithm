import java.util.*;

class Solution {
    public int[] solution(int n) {
        List<Integer> a = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                a.add(i);
            }
        }
        
        int[] result = new int[a.size()];
        for (int i = 0; i < a.size(); i++) {
            result[i] = a.get(i);
        }

        return result;
    }
}
