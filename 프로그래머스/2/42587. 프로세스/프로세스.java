import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        Queue<int[]> queues = new LinkedList<>();
        for(int i = 0 ; i < priorities.length; i++){
            queues.offer(new int[]{i, priorities[i]});
        }
        
        int order = 0;
        
        while(!queues.isEmpty()){
            int[] current = queues.poll();
            boolean hasHigherPriority = false;
            
            for(int[] queue : queues){
                if( queue[1] > current[1] ){
                    hasHigherPriority = true;
                    break;
                }
            }
            
            if(hasHigherPriority){
                queues.offer(current);
            } else {
                order++;
                if(current[0] == location){
                    return order;
                }
            }
        }
        
        return -1;
    }
}