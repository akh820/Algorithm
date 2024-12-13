import java.util.HashMap;

class Solution {
    public int solution(String[][] clothes) {
        
        HashMap<String, Integer> map = new HashMap<>();
        
        for(String[] cloth : clothes){
            String kind = cloth[1];
            map.put(kind, map.getOrDefault(kind, 0) + 1);
        }
        
        int totalCombination = 1;
        for(int count : map.values()){
            totalCombination *= count + 1;
        }
        
        return totalCombination - 1;
    }
}