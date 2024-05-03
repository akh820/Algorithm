import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int count = 0;

        while(N >= 5){
            count += N / 5;
            N /= 5;
        }
        System.out.println(count);

    }
}
