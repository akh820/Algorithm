import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        int max = nums.length / 2;
        HashSet<Integer> set = new HashSet<>();
        for ( int i : nums ){
            set.add(i); // 중복되지 않은 값들이 담겨져 있겠지 ?
        }
        if( set.size() <= max ){
            return set.size();
        } else {
            return max;
        }
    }
}