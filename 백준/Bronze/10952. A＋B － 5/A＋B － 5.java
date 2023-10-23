import java.util.Scanner;

public class Main {
    public static void main (String []args){
        
        Scanner scn = new Scanner(System.in);


        

        while (true){

            int A = scn.nextInt();
            int B = scn.nextInt();

            if ( A == 0 && B == 0) break;
            System.out.println(A+B);
        }
    }
}
