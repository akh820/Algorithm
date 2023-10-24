import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        
        int n = Integer.parseInt(scn.nextLine());
        
        String strings[] = new String[n];

        for ( int x = 0 ; x < n ; x++){
            strings[x] = scn.nextLine();
        }
        
        for ( int x = 0 ; x < n ; x++){
            System.out.print(strings[x].charAt(0));
            System.out.println(strings[x].charAt(strings[x].length()-1));
        }

        // for ( String t : strings){
        //     System.out.println(t);
        // }
    }
}
