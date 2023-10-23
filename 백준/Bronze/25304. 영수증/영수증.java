import java.util.*;

public class Main{
    public static void main (String []args){
        Scanner scn = new Scanner(System.in);

        int totalPrice = scn.nextInt();
        int totalNumber =  scn.nextInt();

        int individuaPrices = 0;
        
        for ( int x = 1; x <= totalNumber; x++){
            int individualItem = scn.nextInt();
            int individualItemNumber = scn.nextInt();

            individuaPrices += individualItem*individualItemNumber;
        }
        if (totalPrice == individuaPrices){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
    }
}
//총가격 , 물품갯수, 개별물품 금액, 갯수