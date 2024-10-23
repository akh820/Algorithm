class Solution {
    public int solution(int n) {
        double sqrtValue = Math.sqrt(n);   
        int answer;                      
        
        if (sqrtValue == (int) sqrtValue) { 
            answer = 1;
        } else {
            answer = 2;
        }
        
        return answer;
    }
}
