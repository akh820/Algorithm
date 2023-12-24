import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        int numberA = scn.nextInt();
        int sum = factorial(numberA);
        System.out.println(sum);
        scn.close();
        

    }

    public static int factorial(int N){

        if(N <= 1) return 1;

        return N * factorial(N-1);
    }
    
    /* 만약 N이 5라면 factorial(5) = 5*fatorial(4)
    factorial(4) = 4*fatorial(3)
    factorial(3) = 3*fatorial(2)
    factorial(2) = 2*(fatorial(1)=1)
                    
    */ 
}
