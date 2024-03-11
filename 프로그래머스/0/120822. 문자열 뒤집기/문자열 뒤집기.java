class Solution {
    public String solution(String my_string) {
        String temp = "";
        for(int i = (my_string.length()-1); i >= 0 ; i--){
            temp += my_string.charAt(i);
        }
        return temp;
    }
}