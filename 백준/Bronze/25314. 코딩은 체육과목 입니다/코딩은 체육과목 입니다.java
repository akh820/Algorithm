import java.util.*;

public class Main {
    public static void main (String []args){
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();
        
        String backint = "long ";
        String messageLong = "int";
        
        
        int NOfShare = N / 4;
        String result = backint;

        for ( int i = 1 ; i < NOfShare ; i++){
            result = result + backint;
        }

        System.out.println(result+messageLong);

    }
}
