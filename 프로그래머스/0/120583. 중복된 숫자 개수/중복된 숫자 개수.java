class Solution {
    public int solution(int[] array, int n) {
        int count = 0;
        for(int e: array){
            if(e == n){
                count++;
            }
        }
        return count;
    }
}