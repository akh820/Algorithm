class Solution {
    
    public int[] solution(int a, int b, int c, int d) {

        int up = a*d + b*c;
        int down = b*d;

        int max = 0;
        for(int i = 1; i <= up && i <= down; i++){
            if( up % i == 0 && down % i == 0) 
            max = i;
        }

        up = up / max;
        down = down / max;

        
        int[] answer = {up,down};
        return answer;
    }
}