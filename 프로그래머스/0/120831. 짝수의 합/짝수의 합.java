class Solution {
    public int solution(int n) {
        int sum = 0;
        
        for(int i = 2; i <= n ; i++){
            int integer = 0;
            if( i % 2 == 0 ){
                integer = i;
                System.out.println("짝수 : "+i);
                sum += i;
            }
        }
        return sum;
    }
}