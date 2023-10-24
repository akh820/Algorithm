import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int input = scn.nextInt();

        int d = 6;
        int a = 1;
        int sum = 1;
        int tempI = 0;
        int tempEquation = 0;
        int i = 1;
        // for ( int i = 1 ; i <= n ; i++){
        //     int equation = (i-1)*d; // i = 1,2,3일때 -> 0, 6
        //     tempEquation = equation; // tempEquation = 0, 6
        //     sum += tempEquation; // sum = 1 + 0, 1 + 6,  
        // }
        while(true){
            int equation = (i-1)*d; // i = 1,2,3일때 -> 0, 6
            tempEquation = equation; // tempEquation = 0, 6
            sum += tempEquation; // sum = 1 + 0, 1 + 6,  
            tempI = i;
            if ( sum >= input){
                System.out.println(i);
                break;
            }
            i++;
        }
        // System.out.println(sum);
        // System.out.println(tempI);

    }
}


