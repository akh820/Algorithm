import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int min = 0;
        int gcf = 1;
        if( num1 >= num2 ){
            min = num2;
        } else { // num1 < num2
            min = num1;
        }
        for(int i = 2 ; i <= min ; i++){
            if( (num1 % i) == 0 && (num2 % i) == 0){
                gcf *= i;
                num1 = num1 / i;
                num2 = num2 / i;
                i = 1;
                if( num1 >= num2 ){
                    min = num2;
                } else {
                    min = num1;
                }
            }
        }
        System.out.println(gcf);
        System.out.println(gcf*num1*num2);
        
    }
}