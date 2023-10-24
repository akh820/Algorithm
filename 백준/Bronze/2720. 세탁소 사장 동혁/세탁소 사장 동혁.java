import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = scn.nextInt();
    
        for ( int i = 0 ; i < N ; i++){

            int money = scn.nextInt();

            // while(true){ //124
                int coin25 = money / 25; // 4
                money = money - (25*coin25); //24
                int coin10 = money / 10; // 2
                money = money - (10*coin10); // 4
                int coin5 = money / 5; //0
                money = money - (5*coin5); //4
                int coin1 = money / 1; //4
                money = money - (1*coin1);
            // }

            System.out.print(coin25 + " " +coin10 + " " +coin5 + " " +coin1);
            System.out.println();
        }
    }
}