import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int K = sc.nextInt();

        System.out.println( factorial(N) / (factorial(N - K) * factorial(K)) );
    }

    static int factorial(int N){

        if(N <= 1){
            return 1;
        }
        return N * factorial(N - 1);
    }   
}