class Solution {
    public int[] solution(String[] strlist) {
        int answer[] = new int[strlist.length];
        int i = 0;
        
        for(String e : strlist){
            System.out.println(e);
            System.out.println(e.length());
            answer[i] = e.length();
            i++;
            
        }
        
        return answer;
    }
}