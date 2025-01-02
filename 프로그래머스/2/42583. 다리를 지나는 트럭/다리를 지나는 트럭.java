import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Integer> q = new LinkedList<>();
        for(int i = 0; i < bridge_length ; i++){
            q.add(0);
        }
        
        int nowBridgeWeights = 0;
        int carIndex = 0;
        int time = 0;
        
        while(carIndex < truck_weights.length || nowBridgeWeights > 0){
            time++;
            
            nowBridgeWeights -= q.poll();
            
            if(carIndex < truck_weights.length && 
               truck_weights[carIndex] + nowBridgeWeights <= weight){
                q.add(truck_weights[carIndex]);
                nowBridgeWeights += truck_weights[carIndex];
                carIndex++;
            } else {
                q.add(0);
            }
        }
        
        return time;
    }
}