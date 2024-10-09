class Solution {
    public int solution(String my_string) {
        char[] stringList = my_string.toCharArray();
        int answer = 0;
        for(char a : stringList){
            if( (a >= '0' && a <= '9') ) {
                answer += a - '0';
            }
        }
        return answer;
    }
}