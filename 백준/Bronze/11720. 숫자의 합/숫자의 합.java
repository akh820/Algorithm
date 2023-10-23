import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int n = Integer.parseInt(scn.nextLine());

        String s = scn.nextLine();
        int array [] = new int [n];
        int sum = 0;

        for ( int x = 0 ; x < s.length() ; x++){
            array[x] = s.charAt(x);
            sum += array[x] - '0';
        }
        System.out.println(sum);
    }
}
