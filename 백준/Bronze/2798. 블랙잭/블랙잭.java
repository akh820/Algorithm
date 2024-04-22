import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int jack = sc.nextInt();
        List<Integer> cardList = new ArrayList<>();
        for(int i = 0 ; i < n ; i++){
            cardList.add(sc.nextInt());
        }
        int max = 0;
        for(int x = 0; x < cardList.size(); x++){
            for(int y = x+1; y < cardList.size(); y++){
                for(int z = y+1; z < cardList.size(); z++){
                        int sum = cardList.get(x) + cardList.get(y) + cardList.get(z);
                    if(sum >= max && sum <= jack){
                        max = sum;
                    }
                }
            }
        }
        System.out.println(max);

        sc.close();
        
    }
}