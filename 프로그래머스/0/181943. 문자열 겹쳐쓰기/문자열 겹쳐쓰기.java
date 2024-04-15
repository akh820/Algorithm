class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        
        char str[] = my_string.toCharArray();
        String str2 = overwrite_string;
        int num = s;
        
        for(int i = num ; i < str.length ; i++){
            if( i-num < str2.length()){
                str[i] = str2.charAt(i-num);
            }
        }
        str.toString();
        
        return new String(str);
    }
}