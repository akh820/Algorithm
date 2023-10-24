import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        String s = scn.nextLine();
        int result = 1;
        char word [] = new char[s.length()];

        for ( int x = 0 ; x < s.length(); x++){
            word [x] = s.charAt(x);
        }

        for ( int x = 0 ; x < s.length() / 2; x++){ //s.length 가 5, 0,1,2,3,4
            if(word [x] == word [s.length()-(x+1)]){// 0이랑 4
                result = 1;                                    // 1이랑 3
                                                    // 2이랑 2
            }else if (word [x] != word [s.length()-(x+1)]){
                result = 0 ;
                break;
            }

        }
        System.out.println(result);
    }
}
