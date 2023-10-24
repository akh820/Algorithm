import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        int array[][] = new int[10][10];
        int max = -1;

        int pointX = 0;
        int pointY = 0;

        for ( int x = 1 ; x <= 9 ; x++){
            for ( int y = 1 ; y <= 9 ; y++){
                array[x][y] = scn.nextInt();
            }
        }
        for ( int x = 1 ; x <= 9 ; x++){
            for ( int y = 1 ; y <= 9 ; y++){
                if ( max <= array[x][y] ){
                    pointX = x;
                    pointY = y;
                    max = array[x][y];
                }
            }
            // System.out.println();
        }

        // for ( int x = 1 ; x <= 9 ; x++){
        //     for ( int y = 1 ; y <= 9 ; y++){
        //         System.out.print(array[x][y]+ " ");
        //     }
        //     System.out.println();
        // }
        System.out.println(max);
        System.out.print(pointX + " " + pointY);
    }
}
