class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length]; // 배열 초기화
        for (int i = 0; i < num_list.length ; i++) {
            answer[i] = num_list[num_list.length - 1 - i]; // 배열 요소 복사
        }
        return answer;
    }
}