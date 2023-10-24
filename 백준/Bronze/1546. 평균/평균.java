import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        // Scanner scn = new Scanner(System.in);

        int N = Integer.parseInt(st.nextToken()); //시험본 과목의 갯수

        // int N = Integer.parseInt(scn.nextLine()); //시험본 과목의 갯수

        int M = 0;  // 자기 점수 중 최댓값 M
                    // 이후 모든 점수를 ,  점수 / M * 100
        
        int scores [] = new int[N];
        double fixScores [] = new double[N];

        double sum = 0;
        
        st = new StringTokenizer(br.readLine());
        for ( int x = 0 ; x < N ; x++){ //배열에 시험점수 입력
            scores [x] = Integer.parseInt(st.nextToken());
        }
        for (int x = 0 ; x < N ; x ++){ //배열 값중 최대값 구함
            if ( scores [x] >= M){
                M = scores [x];
            }
        }
        for ( int x = 0 ; x < N ; x++){
            fixScores [x] = ( (((double)scores[x]) / M) * 100 );
            sum += fixScores[x];
        }
        // for ( double k : fixScores){
        //     System.out.println(k);
        // }
        System.out.println(sum / N);
        
    }
}
