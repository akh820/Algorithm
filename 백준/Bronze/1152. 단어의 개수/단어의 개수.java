import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();

        String ss [] = s.split(" "); 

        if( ss.length > 0 && ss[0].equals("")){
            System.out.println(ss.length-1);
        }else{
        System.out.println(ss.length);
        }
    }
}

