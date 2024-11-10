class Solution {
    public int[] solution(int[] numbers, String direction) {
        int[] a = new int[numbers.length];
            if(direction.equals("left")){
                int count = 0;
                for(int i = 0; i < numbers.length; i++){
                    count++;
                    if( count == numbers.length){
                        a[i] = numbers[0];
                    }else {
                        a[i] = numbers[i+1];    
                    }
                }
            } else {
                int count = 0;
                for(int i = 0; i < numbers.length; i++){
                    count++;
                    if( count == 1){
                        a[i] = numbers[numbers.length-1];
                    }else {
                        a[i] = numbers[i-1];    
                    }
                }
            }
        return a;
    }
}