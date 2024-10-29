class Solution {
    public int solution(int n) {
        int count = 0;
        for(int i = 1 ; i <= n ; i++){
            if( ((n / i) * i == n) ){
                count++;
            }
        }
        int answer = 0;
        return count;
    }
}