import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken()); // 입력 받은 횟수
        
        for ( int  x=  0 ; x < n ; x++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken()); // 반복할 횟수
            String sentence = st.nextToken();  
            
            for ( int y = 0 ; y < sentence.length() ; y ++){
                char array []  = new char [sentence.length()];
                array [y] = sentence.charAt(y);
                
                for ( int z = 0; z < a ; z++ ){
                    System.out.print(array[y]);
                }
            }
            System.out.println();
        }

    }
}