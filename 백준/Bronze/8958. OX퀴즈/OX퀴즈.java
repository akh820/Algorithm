import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.nextLine();
        for(int i = 0 ; i < a ; i ++){
            int sum = 0;
            int tmpSum = 0;
            char check[] = sc.nextLine().toCharArray();
            for(int x = 0 ; x < check.length ; x++){
                if(check[x] == 'O'){
                    tmpSum += 1;
                    sum += tmpSum;
                } else {
                    tmpSum = 0;
                }
            }
            System.out.println(sum);
        }
        
        sc.close();
    }
}