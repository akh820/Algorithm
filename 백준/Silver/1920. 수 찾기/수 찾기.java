import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    public static int[] arr;

    public static void main (String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        arr = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        for(int i = 0 ; i < N ; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }
        //이분탐색법을 사용하기 위해 한번 정렬
        Arrays.sort(arr);

        int M = Integer.parseInt(br.readLine());

        st = new StringTokenizer(br.readLine()," ");
        StringBuilder sb = new StringBuilder();
        for(int i = 0 ; i < M ; i++){

            if(binarySearch(Integer.parseInt(st.nextToken())) >= 0){
                sb.append("1").append('\n');
            } else {
                sb.append("0").append('\n');
            }

        }
        System.out.println(sb);
    }

    public static int binarySearch(int value){

        int low = 0;
        int high = arr.length - 1;


        while(low <= high){

            int mid = (low + high)/2;

            if( value < arr[mid] ){
                high = mid -1;
            }
            else if( value > arr[mid] ){
                low = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
