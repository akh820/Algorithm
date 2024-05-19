import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 첫 번째 리스트의 길이 N을 입력받습니다.
        int N = Integer.parseInt(sc.nextLine());
        Set<Integer> set = new HashSet<>();

        // 첫 번째 리스트의 N개의 정수를 입력받습니다.
        for (int i = 0; i < N; i++) {
            int temp = Integer.parseInt(sc.next());
            set.add(temp);
        }
        // 다음 입력을 받기 위해 줄바꿈 문자를 소비합니다.
        sc.nextLine();

        // 두 번째 리스트의 길이 M을 입력받습니다.
        int M = Integer.parseInt(sc.nextLine());

        // 두 번째 리스트의 M개의 정수를 입력받습니다.
        for (int i = 0; i < M; i++) {
            int temp = Integer.parseInt(sc.next());
            if (set.contains(temp)) {
                System.out.println("1");
            } else {
                System.out.println("0");
            }
        }

        // Scanner 객체를 닫습니다.
        sc.close();
    }
}
