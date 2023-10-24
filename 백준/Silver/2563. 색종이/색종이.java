import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int paper[][] = new int[100][100];

        int N = scn.nextInt();

        for ( int i = 0 ; i < N ; i++){

            int pointX = scn.nextInt();
            int pointY = scn.nextInt();


            if ( pointX <= 90 && pointY <= 90){

                for (int x = pointX; x < pointX+10 ; x++ ){
                    for ( int y = pointY; y < pointY+10 ; y++){
                        paper[x][y] = 1;
                    }
                }    
            }
        }
        int sum = 0;
        for ( int x = 0 ; x < 100; x++){
            for( int y = 0 ; y < 100; y++){
                // System.out.print(paper[x][y]+ " ");
                sum += paper[x][y];
            }
            // System.out.println();
        }
        System.out.println(sum);
    }
}
