import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.lang.Exception;

public class Main {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int chess[] = new int[6];
        int chessPieces [] = {1,1,2,2,2,8};

        for ( int x = 0 ; x < chess.length; x++){
            chess[x] = Integer.parseInt(st.nextToken());

        }

        br.close();
        
        for (int x= 0 ; x < chess.length; x++){
            System.out.print(chessPieces[x] -chess[x] + " ");
        }
        

    }
}
