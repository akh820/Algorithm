import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> q = new LinkedList<>();
        for(int i=0; i < speeds.length; i++){
            int remainDays = 100 - progresses[i];
            int days = (int) Math.ceil( (double) remainDays / speeds[i]);
            q.add(days);
        }
        
        List<Integer> list = new ArrayList<>();
        while(!q.isEmpty()){
            int currentDay = q.poll();
            int count = 1;
            while(!q.isEmpty() && q.peek() <= currentDay){
                q.poll();
                count++;
            }
            
            list.add(count);
        }
        return list.stream().mapToInt(i->i).toArray();
    }
}