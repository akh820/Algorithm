import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int number = scn.nextInt();
        int k = scn.nextInt();
        int numbers [] = new int[number];
        int count = 0 ;

        for ( int i = 1 ; i <= number ; i++){
            if ( (number % i) == 0){
                numbers[i-1] = i;
            }
        }

        for ( int e : numbers){
            if( e != 0){
                // System.out.println(e);
                count++;
                if( count == k){
                    System.out.println(e);
                }
            }
        }
        if(count < k){
            System.out.println("0");
        }
    }
}
