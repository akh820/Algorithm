import java.util.Arrays;

class Solution {
    public int solution(int[] array) {

        int length = array.length / 2; //배열 길이에서 2로 나눈값을 인덱스 삼아
        
        Arrays.sort(array); //정렬해준다
        
        
        return array[length];
    }
}