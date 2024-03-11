class Solution {
    public int solution(int[] array, int height) {
        int count=0;
        for(int e : array){
            if(e > height){
                count++;
            }
        }
        return count;
    }
}