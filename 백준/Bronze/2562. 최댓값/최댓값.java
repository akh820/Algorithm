import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int array [] = new int [9];

        for (int x = 0; x < 9; x++){
            array [x] = Integer.parseInt(br.readLine());
        }
        int max = 0;
        int maxNum = 0;

        for (int x = 0 ;x < 9; x++){
            if( array[x] >= max){
                max = array[x];
                maxNum = x+1;
            }
        }
        System.out.println(max);
        System.out.println(maxNum);
    }
}
