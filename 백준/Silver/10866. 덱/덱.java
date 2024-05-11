import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            switch (st.nextToken()) {
                case "push_front" : {
                    stack.addFirst(Integer.parseInt(st.nextToken()));
                    break;
                }
                case "push_back" : {
                    stack.addLast(Integer.parseInt(st.nextToken()));
                    break;
                }
                case "pop_front" : {
                    if (!stack.isEmpty()) {
                        System.out.println(stack.pollFirst());
                    } else {
                        System.out.println("-1");
                    }
                    break;
                }
                case "pop_back" : {
                    if (!stack.isEmpty()) {
                        System.out.println(stack.pollLast());
                    } else {
                        System.out.println("-1");
                    }
                    break;
                }
                case "size" : {
                    System.out.println(stack.size());
                    break;
                }
                case "empty" : {
                    if (stack.isEmpty()) {
                        System.out.println("1");
                    } else {
                        System.out.println("0");
                    }
                    break;
                }
                case "front" : {
                    if (stack.isEmpty()) {
                        System.out.println("-1");
                    } else {
                        System.out.println(stack.getFirst());
                    }
                    break;
                }
                case "back" : {
                    if (stack.isEmpty()) {
                        System.out.println("-1");
                    } else {
                        System.out.println(stack.getLast());
                    }
                    break;
                }
            }
        }

//        System.out.println(stack);
    }
}