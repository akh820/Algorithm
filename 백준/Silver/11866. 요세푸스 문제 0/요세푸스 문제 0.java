import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();

        boolean[] list = new boolean[N];

        String answer = "<";

        int loopCount = K;
        int i = 0;
        int exit = 0;
        while(exit < N){
            exit = 0;
            // 종료 조건
            for(boolean b: list){
                if(b) exit++;
            }
            if(!list[i]){
                loopCount--; // 2,1,0
                if(loopCount == 0){
                    list[i] = true;
                    loopCount = K;
                    if(exit != N-1){
                        answer += (i+1)+", ";
                    } else {
                        answer += (i+1)+">";
                    }
                }
            }
            i++; // 1,2,3
            if(i == N){
                i = 0;
            }
        }
        System.out.println(answer);


    }
}
