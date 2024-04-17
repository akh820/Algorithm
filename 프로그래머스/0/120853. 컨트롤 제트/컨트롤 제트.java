class Solution {
    public int solution(String s) {
        int sum = 0;
        String str[] = s.split(" ");
        // System.out.println(str.length);
        for(int i = str.length-1 ; i >= 0 ; i--){
            if( str[i].equals("Z") ){
                i--;
            } else {
                sum += Integer.parseInt(str[i]);
            }
        }
        return sum;
    }
}