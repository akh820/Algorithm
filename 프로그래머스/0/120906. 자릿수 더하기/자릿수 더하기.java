class Solution {
    public int solution(int n) {
        int answer = 0;
        String StringN = Integer.toString(n);
        char[] charArray = StringN.toCharArray();
        for(char e : charArray){
            if( e >= '0' && e <= '9'){
                answer += e - '0';
            }
        }
        return answer;
    }
}