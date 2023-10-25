import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();

        int minX = 10000;
        int maxX = -10000;
        int minY = 10000;
        int maxY = -10000;

        for ( int i = 1 ; i <= N ; i++){
            int x = scn.nextInt();
            int y = scn.nextInt();
 
            if ( minX >= x){
            minX = x;
            }
            if ( maxX <= x){
                maxX = x;
            }
            if ( minY >= y){
                minY = y;
            }
            if ( maxY <= y){
                maxY = y;
            }
        }

        if ( N <=1 ){
            System.out.println("0");
        }else{
            int resultA = maxX - minX;
            int resultB = maxY - minY;
            System.out.println(resultA*resultB);
        }
    }
}
