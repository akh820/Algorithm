class Solution {
    public int solution(int n) {
        int a = 0;
        for(int i = 3 ; i <= n; i++){
            if(!isPrime(i)){
                a++;
                System.out.println(i + "는 합성수");
            }
        }
        return a;
    }
    
    private boolean isPrime(int n){
        if( n <= 1) return false;
        if( n == 2) return true;
        if( n % 2 == 0) return false;
        
        int sqrt = (int) Math.sqrt(n);
        for(int i = 3; i <= sqrt; i += 2 ){
            if( n % i == 0) return false;
        }
        return true;
    }
}