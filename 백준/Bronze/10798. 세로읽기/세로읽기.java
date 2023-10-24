import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        char wordArray[][] = new char[15][15];

        for ( int i = 0 ; i < 5; i++){

            String input = scn.nextLine();

            for ( int ii = 0; ii< input.length() ; ii ++){

                wordArray[i][ii] = input.charAt(ii) ;
            }
        }

        for ( int x = 0 ; x < 15; x++){
            for ( int y = 0 ; y < 15 ; y ++){
                if(wordArray[y][x] == '\0') {
                    continue;
                }
                System.out.print(wordArray[y][x]);
            }
        }
    }
}
