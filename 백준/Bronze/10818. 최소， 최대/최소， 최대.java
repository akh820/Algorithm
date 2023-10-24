import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int [] arrays = new int [N];
        
        StringTokenizer st = new StringTokenizer(br.readLine());

        for ( int x = 0 ; x < N ; x++){
            int value = Integer.parseInt(st.nextToken()); 
            arrays[x] = value;
            
        }
        // 20 10 35 30 7
        // 배열에서 최대값 최소값 찾는 알고리즘
        int min = 1000000;
        int max = -1000000;
        
        for ( int x = 0 ; x < N ; x++){
            if( arrays[x] >= max ){
                max = arrays[x];
            }
            if (arrays[x] <= min){
                min = arrays[x];
            }
        }

        System.out.print(min);
        System.out.print(" "+max);
    }
}
