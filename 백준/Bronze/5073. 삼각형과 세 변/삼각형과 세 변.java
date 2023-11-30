import java.util.Scanner;

public class Main{

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int a = 0 ;
        int b = 0 ;
        int c = 0 ;

        while(true){
            a = scn.nextInt();
            b = scn.nextInt();
            c = scn.nextInt();

            if( a == 0 || b == 0 || c == 0){
                break;
            }
            
            if ( a >= b+c || b >= a+c || c >= a+b ){
                System.out.println("Invalid");
            }
            else if( a == b && b == c && a == c){
                System.out.println("Equilateral");
            }
            else if( a == b || b == c || a == c){
                System.out.println("Isosceles");
            }
            else if( a != b && b != c && a != c){
                System.out.println("Scalene");
            }

            
        }
    }
}