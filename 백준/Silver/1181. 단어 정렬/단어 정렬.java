import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        Set<String> set = new HashSet<>();
        sc.nextLine();
        for(int i = 0; i < n ; i++){
            set.add(sc.nextLine());
        }

        List<String> list = new ArrayList<>(set);

        Collections.sort(list, new Comparator<String>() {

            @Override
            public int compare(String str1, String str2){
                if(str1.length() != str2.length()){
                    return Integer.compare(str1.length(), str2.length()); // str2로 정렬하면 내림차순, str1로 정렬하면 오름차순
                } else {
                    return str1.compareTo(str2);  // 길이가 같으면 알파벳순으로 정렬
                }
            }
            
        });

        for(String s : list){
            System.out.println(s);
        }

    }
}