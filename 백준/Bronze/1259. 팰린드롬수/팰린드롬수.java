import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        
        while(true){
            int tmp = sc.nextInt();
            String check = "yes";
            if( tmp == 0 ) break;
            String s = Integer.toString(tmp);
            for ( int i = 0 ; i < s.length() / 2 ; i++){
                if( s.charAt(i) != s.charAt(s.length()-(1+i)) ) {
                    check = "no";
                } 
            }
            System.out.println(check);
        }
    }
}