class Solution {
    public int solution(int n, int k) {
        int sheepPrice = 12000*n;
        int service = (n / 10);
        int drinkPrice = 2000*(k-service);
        
        return sheepPrice+drinkPrice;
    }
}