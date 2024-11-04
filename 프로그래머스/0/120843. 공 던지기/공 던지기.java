class Solution {
    public int solution(int[] numbers, int k) {
        int n = numbers.length;
        int index = 0; 
        
        for (int i = 0; i < k - 1; i++) {
            index = (index + 2) % n;
        }
        
        return numbers[index]; 
    }
}