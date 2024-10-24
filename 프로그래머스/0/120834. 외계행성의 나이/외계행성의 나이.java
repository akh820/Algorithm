class Solution {
    public String solution(int age) {
        String a = String.valueOf(age);
        StringBuilder result = new StringBuilder();  // 결과를 담을 문자열
        
        for (int i = 0; i < a.length(); i++) {
            // 각 숫자를 'a'와 대응시키려면, '0'을 'a'로 변환 (즉, 48 대신 97을 사용)
            char convertedChar = (char) (a.charAt(i) - '0' + 'a');
            result.append(convertedChar);  // 변환된 알파벳을 결과에 추가
        }
        
        return result.toString();  // 변환된 알파벳 문자열을 반환
    }
}
