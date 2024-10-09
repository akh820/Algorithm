class Solution {
    public String solution(String my_string) {
        char[] newList = my_string.toCharArray();
        
        for (int i = 0; i < newList.length; i++) {
            if (Character.isUpperCase(newList[i])) {
                newList[i] = Character.toLowerCase(newList[i]);
            } else if (Character.isLowerCase(newList[i])) {
                newList[i] = Character.toUpperCase(newList[i]);
            }
        }
        
        String answer = new String(newList);
        return answer;
    }
}
