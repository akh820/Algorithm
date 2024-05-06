import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int five = 0;
        int three = 0;

        int fiveCount = 0;
        int min = Integer.MAX_VALUE;
        for(int i = 0; i <= N / 3; i++){
            int threeCount = 0;
            five = i*5;
            for(int j = 0; j <= N / 3; j++){
                three = j*3;
                if(five + three == N){
                    min = fiveCount+threeCount;
                }
                threeCount++;
            }
            fiveCount++;
        }
        if(min == Integer.MAX_VALUE){
            System.out.println("-1");
        } else {
            System.out.println(min);
        }
    }
}
