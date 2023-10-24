import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();
        int M = scn.nextInt();
        
        int arrayA [][] = new int[N][M];
        int arrayB [][] = new int[N][M];

        for ( int x = 0 ; x < N ; x++){
            for ( int y = 0 ; y < M ; y++){
                arrayA[x][y] = scn.nextInt();
            }
        }
        for ( int x = 0 ; x < N ; x++){
            for ( int y = 0 ; y < M ; y++){
                arrayB[x][y] = scn.nextInt();
            }
        }
        for ( int x = 0 ; x < N ; x++){
            for ( int y = 0 ; y < M ; y++){
                System.out.print((arrayA[x][y]+arrayB[x][y]) + " "); 
            }
            System.out.println();
        }
    }
}
