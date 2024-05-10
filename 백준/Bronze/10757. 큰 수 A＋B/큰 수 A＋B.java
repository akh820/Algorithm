import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        String str_A = st.nextToken();
        String str_B = st.nextToken();

        int max_length = Math.max(str_A.length(), str_B.length());


        int[] A = new int[max_length + 1];
        int[] B = new int[max_length + 1];

        //A배열 초기화
        for(int i = str_A.length()-1, idx = 0; i >= 0 ; i--, idx++){
            A[idx] = str_A.charAt(i) - '0';
        }
        //B배열 초기화
        for(int i = str_B.length()-1, idx = 0; i >= 0 ; i--, idx++){
            B[idx] = str_B.charAt(i) - '0';
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0 ; i < max_length; i++){
            int value = A[i] + B[i];
            A[i] = value % 10;
            A[i+1] += value / 10;
        }
        if(A[max_length] != 0){
            sb.append(A[max_length]);
        }
        for(int i = max_length - 1; i >= 0; i--) {
            sb.append(A[i]);
        }
        System.out.println(sb);

//        StringBuilder sbA = new StringBuilder();
//        for(int i = 0 ; i < A.length; i++){
//            sbA.append(A[i]);
//        }
//        System.out.println(sbA);
//
//        StringBuilder sbB = new StringBuilder();
//        for(int i = 0 ; i < B.length; i++){
//            sbB.append(B[i]);
//        }
//        System.out.println(sbB);
    }
}