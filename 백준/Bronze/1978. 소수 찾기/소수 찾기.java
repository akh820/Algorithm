import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();
        int count = 0;

        for ( int i = 0 ; i < N ; i++){
            int tempCount = 0;
            int k = scn.nextInt();
            for ( int x = 1 ; x <= k ; x++){
                if ( k % x == 0){
                    tempCount++;
                    if(tempCount > 2) {
                        break;
                    }
                    // else if(tempCount == 2){ //조건을하나 더걸면 되는데 멀걸지 ? 
                    //     count++;
                    //     break;
                    // }
                }
            }
            if ( tempCount == 2){
                count++;
            }
            
        }
        System.out.println(count);
    }
}
