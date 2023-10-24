import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        boolean students [] = new boolean[31] ;  // [0] ~ [30] 까지 31개 생성

        
        for ( int x = 1 ; x <= 28 ; x++){ // 28번 입력 값을 받는다.
            int number =  Integer.parseInt(br.readLine());  // 입력하는 수의 값 1 ~ 30 사이 
            students[number] = true;    // 이렇게하게되면 일단 [0]은 무조건 false , 하지만 출력할때 [0빼고 출력하기로]
        }
        
        
        // for ( int x = 1 ; x <= 30 ; x++){
        //     System.out.println("배열 번호" + x + " 배열 값" + students[x]);
        // }
        for ( int x = 1 ; x <= 30 ; x++){
            if ( students[x] == false){
            System.out.println(x);
            }
        }
    }
}
