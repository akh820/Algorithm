import java.util.Scanner;
// 구현법
// 일단 일단 문자 Mississipi를 입력받음
// charAt를 이용해서 배열에 각 글자별로 저장
// charAt 에 char 타입인 M i s s i s s i p i 저장되어있음
// 각 글자 for 문을 돌려서 각 글자수가 몇개 있는지 확인함
// 확인할때는 알파벳이 들어있는 배열을 생성하고
// 알바페뱃 배열이 스트링배열의 글자(char) 값이랑 일치하는 순간 +1 count
// for문을 돌려서 max값을 찾아 내고 그값을 출력
// 문제점 : max값이 같은게 두개면 ?를 출력해야함
public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        String s = scn.nextLine();

        char array [] = new char [s.length()];
        char alphabet [] = {'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
        int countAlphabet [] = new int [26];

        for ( int x = 0 ; x < s.length(); x++){
            array[x] = s.charAt(x);
        }

        for ( int x = 0; x < s.length(); x++){
            if ( array[x] == 'A' || array[x] == 'a'){
                countAlphabet[0] += 1;
            }
            else if ( array[x] == 'B' || array[x] == 'b'){
                countAlphabet[1] += 1;
            }
            else if ( array[x] == 'C' || array[x] == 'c'){
                countAlphabet[2] += 1;
            }
            else if ( array[x] == 'D' || array[x] == 'd'){
                countAlphabet[3] += 1;
            }
            else if ( array[x] == 'E' || array[x] == 'e'){
                countAlphabet[4] += 1;
            }
            else if ( array[x] == 'F' || array[x] == 'f'){
                countAlphabet[5] += 1;
            }
            else if ( array[x] == 'G' || array[x] == 'g'){
                countAlphabet[6] += 1;
            }
            else if ( array[x] == 'H' || array[x] == 'h'){
                countAlphabet[7] += 1;
            }
            else if ( array[x] == 'I' || array[x] == 'i'){
                countAlphabet[8] += 1;
            }
            else if ( array[x] == 'J' || array[x] == 'j'){
                countAlphabet[9] += 1;
            }
            else if ( array[x] == 'K' || array[x] == 'k'){
                countAlphabet[10] += 1;
            }
            else if ( array[x] == 'L' || array[x] == 'l'){
                countAlphabet[11] += 1;
            }
            else if ( array[x] == 'M' || array[x] == 'm'){
                countAlphabet[12] += 1;
            }
            else if ( array[x] == 'N' || array[x] == 'n'){
                countAlphabet[13] += 1;
            }
            else if ( array[x] == 'O' || array[x] == 'o'){
                countAlphabet[14] += 1;
            }
            else if ( array[x] == 'P' || array[x] == 'p'){
                countAlphabet[15] += 1;
            }
            else if ( array[x] == 'Q' || array[x] == 'q'){
                countAlphabet[16] += 1;
            }
            else if ( array[x] == 'R' || array[x] == 'r'){
                countAlphabet[17] += 1;
            }
            else if ( array[x] == 'S' || array[x] == 's'){
                countAlphabet[18] += 1;
            }
            else if ( array[x] == 'T' || array[x] == 't'){
                countAlphabet[19] += 1;
            }
            else if ( array[x] == 'U' || array[x] == 'u'){
                countAlphabet[20] += 1;
            }
            else if ( array[x] == 'V' || array[x] == 'v'){
                countAlphabet[21] += 1;
            }
            else if ( array[x] == 'W' || array[x] == 'w'){
                countAlphabet[22] += 1;
            }
            else if ( array[x] == 'X' || array[x] == 'x'){
                countAlphabet[23] += 1;
            }
            else if ( array[x] == 'Y' || array[x] == 'y'){
                countAlphabet[24] += 1;
            }
            else if ( array[x] == 'Z' || array[x] == 'z'){
                countAlphabet[25] += 1;
            }
        }

        // for ( int k : countAlphabet){
        //     System.out.print(k+ " ");
        // }

        int max = 0;
        for ( int x = 0 ; x < 26 ; x++){
            if ( max <= countAlphabet [x] ){
                max = countAlphabet[x];
            }
        }
        int count = 0;
        char tempAlpha = ' ';
        
        for ( int x = 0; x < 26; x++){
            if(countAlphabet[x] == max ) {
                tempAlpha = alphabet[x];
                count++;
            }
        }

        if ( count == 1){
            System.out.println(tempAlpha);
        } else {
            System.out.println("?");
        }

        // System.out.println("max : " + max + " count : " + count);

    }
}