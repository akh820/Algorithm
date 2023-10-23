import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int M = scn.nextInt();
        int N = scn.nextInt();
        ArrayList<Integer> PrimeList = new ArrayList<>();
        // int PrimeArray[] = new int[(N-M)+1]; //+1 해주는 이유는 경계값 포함하기 때문
        int count = 0;

        for ( int i = M ; i <= N ; i++){
            int tempCount = 0 ;
            for ( int k = 1 ; k <= i ; k++){
                if( i % k == 0){
                    tempCount++;
                    if(tempCount > 2){
                        break;
                    }
                }
            }
            if ( tempCount == 2){
                PrimeList.add(i);
            }
        }


        int sum = 0;
        // int min = M;
        for (int e : PrimeList){
            sum += e;
        }
        if( sum == 0){
            System.out.println("-1");
        }else{
            System.out.println(sum);
            System.out.println(PrimeList.get(0));
        }
    }
}
