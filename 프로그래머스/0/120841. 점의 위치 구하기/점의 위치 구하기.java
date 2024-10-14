class Solution {
    public int solution(int[] dot) {
        int a = 0;
        if(dot[0] > 0){
            if(dot[1] > 0){
                a = 1;
            } else {
                a = 4;
            }
        } else {
            if(dot[1] < 0){
                a = 3;
            } else {
                a = 2;
            }
        }
        return a;
    }
}