import java.util.ArrayList;

class Solution {
    public String solution(String[] my_strings, int[][] parts) {
        StringBuilder answer = new StringBuilder();  
        for (int i = 0; i < parts.length; i++) {
            ArrayList<Integer> numbers = new ArrayList<>();
            for (int j = 0; j < parts[i].length; j++) {
                numbers.add(parts[i][j]);
            }

            answer.append(my_strings[i].substring(numbers.get(0), numbers.get(1) + 1));
        }

        return answer.toString(); 
    }
}
