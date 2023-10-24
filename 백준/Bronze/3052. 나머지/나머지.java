import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // StringTokenizer st = new StringTokenizer(br.readLine());

        boolean array [] = new boolean [43];
        int count = 0;

        for ( int x = 1; x <= 10; x++){
            int number = Integer.parseInt(br.readLine());
            int rest = number % 42;
            array [rest] = true;
        }
        
        for ( int x = 0 ; x < 43 ; x++){
            // System.out.println("번호 " + x + " 배열 " +array[x]);
            if ( array[x] == true){
                count++;
            }
        }
        System.out.println(count);

    }
}
