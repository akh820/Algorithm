import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        int N = Integer.parseInt(str);
        
        // System.out.println("square" + square);
        int min = 0;
        // System.out.println( N % square );

        for( int i = 1 ; i <= N ; i++){ // N이 216
            int temp = i; // i가 198일때
            int sum = 0;
            int square = (int)Math.pow(10, str.length()-1);
            while(true){
                sum += temp / square; // square는 100 , sum = 1 , square는 10 , sum = 1 + 9 / square = 1 , 8 / 1 = 8, sum = 1 + 9 + 8
                temp = temp % square; // 198 % 100 , temp = 98 , 98 % 10 , temp = 8 , temp = 8 % 1 = 0
                if(temp <= 0) break;
                square = square / 10; // square = 1; square = 1 / 10 = 0
            }
            if( sum + i == N ){ // 198 + 18 = 216
                min = i; break;
            }
        }
        System.out.println(min);
    }
}
