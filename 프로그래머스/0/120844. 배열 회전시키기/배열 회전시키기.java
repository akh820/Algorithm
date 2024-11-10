class Solution {
    public int[] solution(int[] numbers, String direction) {
        int len = numbers.length; // len 3이라고 가정
        int[] a = new int[len];
        for( int i = 0; i < len; i++ ){
            if(direction.equals("left")){
                a[i] = numbers[ (i + 1) % len];
            } else {
                a[i] = numbers[ (i - 1 + len) % len];
            }
        }
        return a;
    }
}