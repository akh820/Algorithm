import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
 
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 
		int N = Integer.parseInt(br.readLine());
        
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();
		
//		int result = 0;
        
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine()," ");
			sb.append(Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken())).append('\n');
//			int a = Integer.parseInt(st.nextToken());
//			int b = Integer.parseInt(st.nextToken());
//			result = a+b;
		}
		br.close();
 
//		System.out.println(result);
		System.out.println(sb);

 
	}
}