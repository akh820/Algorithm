import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        while(true){
            int number = scn.nextInt();
            int numbers [] = new int[100000];
            int max = 0;
            int sum = 0;
            String sumString = "";
            
            if(number == -1) break;
        
        for ( int i = 1 ; i <= number ; i++){
            if ( number == -1){
                break;
            }else if ( (number % i) == 0){
                if ( number == i) {
                    numbers[i-1] = 0;    
                }else{
                    numbers[i-1] = i;
                }
            }
            // if ( max <= numbers[i-1]){
            //     max = numbers[i-1];
            // }
        }
        // for ( int e : numbers){
        //     System.out.println(e);
        // }
        for ( int e : numbers){
            if ( max <= e){
                max = e;
            }
        }
        // System.out.println(max);
        for ( int i = 0 ; i < numbers.length ; i++){
            sum += numbers[i];
            if ( numbers[i] == max ){
                sumString += i+1;
            }
            else if ( numbers[i] != 0 ){
                sumString += i+1 + " + ";
            }
        }
        if ( number == sum){
            System.out.println(sum + " = " + sumString);
        }else{
            System.out.println(number + " is NOT perfect.");
        }
        }
    }
}
