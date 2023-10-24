import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        // BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        // StringTokenizer st = new StringTokenizer(br.readLine());
        Scanner scn = new Scanner(System.in);
        
        int s1 = scn.nextInt();
        int s2 = scn.nextInt();

        int reversedS1 = 0;

        while ( s1 != 0) {
            int digit = s1 % 10; // 123이면 3저장
            reversedS1 = reversedS1*10 + digit;
            s1 = s1 / 10;
        }

        int reversedS2 = 0;

        while ( s2 != 0) {
            int digit = s2 % 10; // 123이면 3저장
            reversedS2 = reversedS2*10 + digit;
            s2 = s2 / 10;
        }
        if ( reversedS1 > reversedS2){
            System.out.println(reversedS1);
        }else {
            System.out.println(reversedS2);
        }
    }
}