import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String S = sc.nextLine();
        int i = Integer.parseInt(sc.nextLine()) -1 ; //배열과 번호맞추기위해

        char array[] = new char[S.length()];

        for ( int x = 0 ; x < S.length(); x++){
            array[x] = S.charAt(x);
        }
        // for ( char k : array){
        //     System.out.println(k);
        // }
        System.out.println(array[i]);
    }
}
