import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine(); 

        for (int i = 0; i < T; i++) {
            int n = sc.nextInt();
            int k = sc.nextInt();
            int room[][] = new int[n+1][k];
            for (int x = 0; x <= n; x++) {
                for (int y = 0; y < k; y++) {
                    if (x == 0) {
                        room[x][y] = y + 1;
                    } else if (y == 0) {
                        room[x][y] = 1;
                    } else {
                        room[x][y] = room[x][y-1] + room[x-1][y];
                    }
                }
            }
            System.out.println(room[n][k-1]);
        }
        sc.close(); 
    }
}
