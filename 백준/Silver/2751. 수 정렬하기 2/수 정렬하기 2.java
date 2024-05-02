import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
    boolean list[] = new boolean[2000001];
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    for(int i = 0; i < N; i++){
        int k = Integer.parseInt(br.readLine());
        list[k+1000000] = true;
    }
    br.close();

    StringBuilder sb = new StringBuilder();

    for(int i = 0; i < list.length;i++){
        if(list[i]){
            sb.append(i-1000000).append("\n");
        }
    }
    System.out.println(sb.toString());
    }
}
