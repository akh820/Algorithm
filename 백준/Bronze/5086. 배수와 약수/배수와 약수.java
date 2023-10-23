import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);


        while(true){
        int a = scn.nextInt();
        int b = scn.nextInt();

        if ( a == 0 & b == 0) break;

        else if( a < b){
            if ( b % a == 0){
                System.out.println("factor");
            }else{
                System.out.println("neither");
            }
        }
        else if ( a > b ) {
            if ( a % b == 0 ){
                System.out.println("multiple");
            }else{
                System.out.println("neither");
            }
        }
        }
    }
}
