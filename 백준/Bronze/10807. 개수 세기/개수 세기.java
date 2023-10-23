import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();

        int [] array = new int [N];

        int count = 0;
        for ( int x = 0 ; x < N ; x++){
            array[x] = scn.nextInt();
        }
        int V = scn.nextInt();

        for (int x = 0 ; x < N ; x++){
            if ( array[x] ==V ){
                count += 1;
            }
        }

        System.out.println(count);
    }
}
