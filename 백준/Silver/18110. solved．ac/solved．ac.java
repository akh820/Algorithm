import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        List<Integer> list = new ArrayList<>();
        int value = (int)Math.round((double)(N * 0.15));
        for(int i = 0 ; i < N ; i++){
            list.add(Integer.parseInt(br.readLine()));
        }

        list.sort(Integer::compareTo);
        List<Integer> subList = list.subList(value, list.size() - value);
        list = new ArrayList<>(subList);

        int sum = 0;
        for(int i = 0 ; i < (N - (value*2)) ; i++){
            sum += subList.get(i);
        }

//        System.out.println(list);
//        System.out.println(value);
        System.out.println( Math.round ((double) sum / (N - (value*2))) );
    }
}