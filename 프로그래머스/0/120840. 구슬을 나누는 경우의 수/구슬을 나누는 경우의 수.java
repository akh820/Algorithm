class Solution {
    public long solution(int balls, int share) {
        // 조합을 직접 계산하는 방식
        return combination(balls, share);
    }
    
    public long combination(int n, int r) {
        if (r == 0 || n == r) return 1; // nC0 = 1, nCn = 1
        
        long result = 1;
        for (int i = 1; i <= r; i++) {
            result *= n - (i - 1);  // n * (n - 1) * ... * (n - r + 1)
            result /= i;            // / 1 * 2 * ... * r
        }
        return result;
    }
}
