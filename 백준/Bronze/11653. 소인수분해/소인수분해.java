import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();
        int i = 2;
        int tempN = N;

        while(N>=2){

            if( tempN % i == 0){
                System.out.println(i);
                tempN = tempN / i ;
            }else if ( tempN % i != 0 ){
                i++;
            }

            if ( i > tempN) break;

        }
    }
}
