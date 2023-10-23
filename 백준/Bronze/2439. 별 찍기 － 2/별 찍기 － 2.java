import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        String star = "*"; // 별 5개면 맨 오른쪽에 별 1 왼쪽에 공백 4
        String space = " ";
        String tempstar = "";
        for ( int x = 0 ; x < N ; x++){
            String result = "";
            
            
            for ( int y = 1 ; y < N - x ; y++){
                result += space;
            }
            tempstar = tempstar + star;
            result = result + tempstar;
            System.out.println(result);

        }
    }
}
