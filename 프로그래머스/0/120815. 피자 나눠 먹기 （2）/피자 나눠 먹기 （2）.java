class Solution {
    public int solution(int n) {
        int a = 0;
        if( n % 6 == 0){
            a = n / 6;
        }
        else if( n % 3 == 0 ){
            a = n / 3;
        } else if ( n % 2 == 0){
            a = n / 2;
        } else {
            a = n;
        }
        return a;
    }
}