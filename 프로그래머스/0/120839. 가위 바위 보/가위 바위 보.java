class Solution {
    public String solution(String rsp) {
        StringBuilder abc = new StringBuilder();
        char[] test = rsp.toCharArray();
        for(int i = 0 ; i < test.length ; i++){
            if(test[i] == '0'){
                abc.append("5");
            } else if(test[i] == '2') {
                abc.append("0");
            } else if(test[i] == '5') {
                abc.append("2");
            }
        }
        String answer = abc.toString();
        return answer;
    }
}