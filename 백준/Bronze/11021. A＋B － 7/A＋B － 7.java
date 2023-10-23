import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
    public static void main (String []args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int N = Integer.parseInt(br.readLine());
        
        for ( int x = 1; x <= N ; x++){

        String input = br.readLine();
        String values[] = input.split(" ");

        int A = Integer.parseInt(values[0]);
        int B = Integer.parseInt(values[1]);
        bw.write("Case #"+x+": " + String.valueOf(A + B));
        bw.newLine();
    }
    bw.flush();
    bw.close();


    }
}
