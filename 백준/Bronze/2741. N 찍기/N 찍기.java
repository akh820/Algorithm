import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        int numberA = scn.nextInt();
        
        for ( int i = 1 ; i <= numberA ; i ++){
            System.out.println(i);
        }

        scn.close();
    }
    
}
