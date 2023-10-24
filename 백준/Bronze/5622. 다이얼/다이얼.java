import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        String input = scn.nextLine();

        int array [] = new int[input.length()];

        for ( int x = 0 ; x <input.length(); x++){
            if( input.charAt(x) == 'A' || 
                input.charAt(x) == 'B' || 
                input.charAt(x) == 'C')
            array[x] = 3;
            else if (   input.charAt(x) == 'D' || 
                        input.charAt(x) == 'E' || 
                        input.charAt(x) == 'F')
            array[x] = 4;
            else if (   input.charAt(x) == 'G' || 
                        input.charAt(x) == 'H' || 
                        input.charAt(x) == 'I')
            array[x] = 5;
            else if (   input.charAt(x) == 'J' || 
                        input.charAt(x) == 'K' || 
                        input.charAt(x) == 'L')
            array[x] = 6;
            else if (   input.charAt(x) == 'M' || 
                        input.charAt(x) == 'N' || 
                        input.charAt(x) == 'O')
            array[x] = 7;
            else if (   input.charAt(x) == 'P' || 
                        input.charAt(x) == 'Q' || 
                        input.charAt(x) == 'R' ||
                        input.charAt(x) == 'S')
            array[x] = 8;
            else if (   input.charAt(x) == 'T' || 
                        input.charAt(x) == 'U' || 
                        input.charAt(x) == 'V')
            array[x] = 9;
            else if (   input.charAt(x) == 'W' || 
                        input.charAt(x) == 'X' || 
                        input.charAt(x) == 'Y' ||
                        input.charAt(x) == 'Z')
            array[x] = 10;
        }
            // ABC는 3초가 걸림
        int sum = 0;
        for ( int x = 0 ; x < input.length(); x++){
            sum += array[x];
        }
        System.out.println(sum);

    }
}
