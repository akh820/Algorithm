import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int upCount = 0;
        int downCount = 0;
        int prevNum = sc.nextInt();
        for(int i = 1 ; i < 8 ; i++){
            int nowNum = sc.nextInt();
            if( prevNum > nowNum){
                downCount++;
            } else {
                upCount++;   
            }
            prevNum = nowNum;
        }
        if(downCount == 7){
            System.out.println("descending");
        } else if ( downCount >= 1 && upCount >= 1){
            System.out.println("mixed");
        } else {
            System.out.println("ascending");
        }

        sc.close();
    }
}