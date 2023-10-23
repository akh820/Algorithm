import java.util.*;

public class Main{
    public static void main (String []args){
        Scanner scn = new Scanner(System.in);
        int x = scn.nextInt();
        int y = scn.nextInt();

        if (x > 0 && y > 0){
            System.out.println("1");
        }
        if (x < 0 && y > 0){
            System.out.println("2");
        }
        if (x < 0 && y < 0){
            System.out.println("3");
        }
        if (x > 0 && y < 0){
            System.out.println("4");
        }
       
    }
}