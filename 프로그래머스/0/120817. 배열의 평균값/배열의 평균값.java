class Solution {
    public double solution(int[] numbers) {
        double sum = 0; // sum을 루프 밖에서 선언하고 double 타입으로 변경
        for(int i = 0; i < numbers.length; i++){
            sum += numbers[i]; // 올바른 배열 요소 접근 방식 사용
        }
        double answer = sum / numbers.length; // 루프가 종료된 후에 평균 계산
        
        return answer;
    }
}
