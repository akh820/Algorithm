import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        String s = sc.next();
        double sum = 0;
        for(int i = 0 ; i < N ; i++){
            double abc = transform(s.charAt(i)); 
            // System.out.println("변환값 : " + abc);
            sum += (double) ( abc * Math.pow(31, i));
            // System.out.println(" 31의 " + i + "승 값 : " + Math.pow(31, i));
            // System.out.println("각항의 값" + (double) ( abc * Math.pow(31, i)));
        }
        System.out.println((int)sum);

        }

        public static int transform(int n){

            return n-'a'+1;
        }
    }
