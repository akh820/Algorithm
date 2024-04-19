import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i = 0 ; i < n ; i++){
            int h = sc.nextInt();
            int w = sc.nextInt();
            int c = sc.nextInt();
            int distance = c / h; // 1
            int elevator = 0;
            int count = 0;
            if( (c % h) == 0){
                elevator = h;
                count = distance;
            } else {
                elevator = c % h; // 4
                count = distance+1;
            }
            if(count <= 9){
                System.out.println(elevator+"0"+count);
            } else {
                System.out.println(elevator+""+count);            
            }

        }

        sc.close();
    }

}
