import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        List<Integer> a = new ArrayList<>();
        for(int i = 0 ; i < arr.length; i++){
            if( i != 0 ){
                if(arr[i] != arr[i-1])
                a.add (arr[i]);
            } else {
                a.add(arr[i]);
            }
        }
        return a.stream().mapToInt( i -> i).toArray();
    }
}