import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        
        int array [] = new int [N];
        // int tempArray[] = new int[N]; // tempArray 에는 array과 같은 배열순서로 값이 저장되어있다.

        for ( int x = 0 ; x < N ; x++){ //배열에 각 바구니에 맞는 숫자 집어 넣는 작업
            array[x] = x+1;
        }

        
        for ( int x = 0; x < M ; x++){
                // for (int count = 0; count < N ; count++){
                //     tempArray[count] = array[count];
                // }
                // for ( int k : tempArray){
                //         System.out.print(k+ " ");
                //     }
        // for ( int k = 0 ; k < N ; k++){
        //     System.out.print(array[k]+ " ");
        // }
                
                st = new StringTokenizer(br.readLine());
                int i = Integer.parseInt(st.nextToken());
                int j = Integer.parseInt(st.nextToken());
                // 1 이랑 4 넣었을떄 가정하면
                // 1에 4 2에 3 3 에 2 4에 1 넣는데 그 중간 과정에서 값이 사라지면 안댐
                
                for (; i < j ; i++, j--){
                    
                    int temp = array[i-1];  // 
                    array [i-1] = array[j-1]; 
                    array [j-1] = temp;
                    
                    // i가 3, j가 4일떄 array[2](3) = array[1](1)



                }
            

        }
        for ( int k : array){
            System.out.print(k+" ");
        }
    }
}
// 5 4
// 1 2 3 4 5 / 5번까지 바구니 생성 / 4번 바구니 뒤집는 입력받음
// 1 2 3 4 5 / 1, 2번 바구니 뒤집기
// 2 1 3 4 5/ 2, 3번 바구니 뒤집기
// 2 3 1 4 5 / 1에서 4번 까지 바구니 뒤집기
// 4 1 3 2 5 / 