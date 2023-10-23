import java.util.*;

public class Main{
    public static void main (String []args){
        Scanner scn = new Scanner(System.in);
        int H = scn.nextInt();
        int M = scn.nextInt();
        int necessaryTime = scn.nextInt();

        int sum = H*60 + M + necessaryTime;
        int convertedTime = ( sum / 60 ) % 24 ;
        int convertedMinute = sum % 60 ;
        System.out.println(convertedTime+" "+convertedMinute);        
    }
}