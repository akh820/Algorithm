import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Stack<Integer> s = new Stack<>();

        for( int i = 0; i < N; i++ ) {
            int line = Integer.parseInt(br.readLine());
            if( line == 0 ) {
                s.pop();
            } else {
                s.push(line);
            }
//            System.out.println(s);
        }
        int sum = 0;
        for(int i : s){
            sum += i;
        }
        System.out.println(sum);
    }
}
