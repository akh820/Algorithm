import java.util.*;

class Solution {
    public int solution(int[] array) {
        HashSet<Integer> numberSet = new HashSet<>();
        
        // 배열의 중복된 값을 제거한 숫자들을 HashSet에 추가
        for (int i = 0; i < array.length; i++) {
            numberSet.add(array[i]);
        }
        
        // 각 숫자의 빈도를 저장할 ArrayList
        ArrayList<Integer> countArray = new ArrayList<>();
        ArrayList<Integer> numberList = new ArrayList<>(numberSet); // 숫자 리스트 저장
        
        // 각 숫자의 빈도를 계산
        for (int num : numberList) {
            int count = 0;
            for (int i = 0; i < array.length; i++) {
                if (array[i] == num) {
                    count++;
                }
            }
            countArray.add(count);
        }
        
        // 최빈값 찾기
        int maxCount = 0;
        int mode = -1;
        boolean isUnique = true;  // 최빈값이 여러 개인지 확인하는 플래그
        
        for (int i = 0; i < countArray.size(); i++) {
            if (countArray.get(i) > maxCount) {
                maxCount = countArray.get(i);
                mode = numberList.get(i);
                isUnique = true;  // 최빈값이 유일함
            } else if (countArray.get(i) == maxCount) {
                isUnique = false;  // 최빈값이 여러 개면 false로 설정
            }
        }
        
        // 최빈값이 여러 개일 경우 -1 반환
        return isUnique ? mode : -1;
    }
}
