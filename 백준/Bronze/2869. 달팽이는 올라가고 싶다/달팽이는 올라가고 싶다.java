import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int up = sc.nextInt();
        int down = sc.nextInt();
        int h = sc.nextInt();

        int count = 0;
        count = ( h - down ) / (up - down);
        if(( h - down ) % (up - down) != 0){
            count++;
        }
        


        System.out.println(count);
    }
}
