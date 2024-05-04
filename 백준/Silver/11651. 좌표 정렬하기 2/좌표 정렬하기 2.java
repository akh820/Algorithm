import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[][] coordinate = new int[N][2];
        for(int i = 0; i < N; i++) {
            coordinate[i][0] = sc.nextInt();
            coordinate[i][1] = sc.nextInt();
        }

        Arrays.sort(coordinate, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                // 먼저 첫 번째 열(x 좌표)에 대해 비교
                if (o1[1] != o2[1]) {
                    return o1[1] - o2[1];
                } else {
                    return o1[0] - o2[0];
                }
            }
        });


        for(int i = 0; i < N; i++) {
            System.out.println(coordinate[i][0]+" "+coordinate[i][1]);
        }


    }
}
