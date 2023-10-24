import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        String s = scn.nextLine();
        
        int strings[] = new int[s.length()];
        int alphabet [] = new int[26];
        int saveNumber[] = new int[26];

        for ( int x = 0 ; x < 26 ; x ++){
            saveNumber[x] = -1;
        }

        int count = 0;

        for ( int x = 0 , b = 'a'; x < 26 ; x++, b++){ //alphabet[]에 a ~ z 순으로 0 ~ 25 대입함
            alphabet[x] = b-'a';
        }

        for ( int x = 0 ; x < s.length(); x++){ // strings [] 에 = baekjoon 대입 
            strings[x] = s.charAt(x)-'a';
        }
        

        for ( int x = 0 ; x < strings.length ; x++){
            for ( int y = 0 ; y < 26 ; y++){
                if (strings[x] == alphabet [y]){
                    if ( saveNumber[y] == -1){
                        saveNumber[y] = count;
                    }
                    count++;
                    break;
                }
            }
        }
        for ( int k : saveNumber){
            System.out.print(k+" ");
        }
    }
}
//baekjoon
//a b  c  d e  f  g  h  i j k  l  m n o  
//1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
//순서가.. a ~ z 까지의 알파벳이 저장되어있고 ? b에서 26번 돌림 1반환, 