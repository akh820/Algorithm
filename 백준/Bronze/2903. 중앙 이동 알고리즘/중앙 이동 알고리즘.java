import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        double N = scn.nextDouble(); 


        double sum = 2 ;
        double tempEquation = 0;
        for ( int i = 1 ; i <= N ; i++){
            sum += Math.pow(2.0, i-1);
        }
        System.out.println((int)Math.pow(sum, 2));

    }
}
