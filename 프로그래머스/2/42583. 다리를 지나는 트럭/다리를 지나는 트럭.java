import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Integer> q = new LinkedList<>();
        int currentBridgeWeight = 0;
        int carNumber = 0;
        int elapsedTime = 0;
        
        for(int i = 0 ; i < bridge_length; i++){
            q.add(0);
        }
        
        while(carNumber < truck_weights.length || currentBridgeWeight > 0){
            elapsedTime++;
            
            currentBridgeWeight -= q.poll();
            
            if(carNumber < truck_weights.length && 
               truck_weights[carNumber] + currentBridgeWeight <= weight){
                q.add(truck_weights[carNumber]);
                currentBridgeWeight += truck_weights[carNumber];
                carNumber++;
            } else {
                q.add(0);
            }
        }
        
            return elapsedTime;
        
    }
}