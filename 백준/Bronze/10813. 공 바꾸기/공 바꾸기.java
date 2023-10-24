import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());


        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());


        int array [] = new int [N];

        for (int x = 0; x < N; x++){
            array [x] = x+1;
        }
        
        for (int x = 0; x < M; x++){
            st = new StringTokenizer(br.readLine());
            int i = Integer.parseInt(st.nextToken());
            int j = Integer.parseInt(st.nextToken());
            int tempArray = array[i-1];
            array[i-1] = array[j-1];
            array[j-1] = tempArray;
        }
        
        for ( int k : array ){
            System.out.print(k+" ");
        }
    }
}
