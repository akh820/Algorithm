import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int dunch[][] = new int[N][2];

        for(int i = 0; i < N; i++) {
            for(int j = 0; j < 2; j++) {
                dunch[i][j] = sc.nextInt();
            }
        }

        for (int i = 0; i < N; i++) {
            int count = 1;
            int weight = dunch[i][0];
            int height = dunch[i][1];
            for (int j = 0; j < N; j++) {
                if(dunch[j][0] > weight && dunch[j][1] > height) {
                    count++;
                }
            }
            System.out.print(count+ " ");
        }

    }
}
