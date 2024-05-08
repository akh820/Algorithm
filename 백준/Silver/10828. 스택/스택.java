import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Stack<Integer> stack = new Stack<>();
        int N = Integer.parseInt(br.readLine());
        for(int i = 0; i < N; i++){
            String[] order = br.readLine().split(" ");
            if(order[0].equals("push")){
                push(stack, Integer.parseInt(order[1]));
            } else if(order[0].equals("top")){
                top(stack);
            } else if(order[0].equals("size")){
                size(stack);
            } else if(order[0].equals("empty")){
                System.out.println(empty(stack));
            } else if(order[0].equals("pop")){
                pop(stack);
            }
        }


    }
    static int push(Stack s, int i) {
        s.push(i);
        return 1;
    }

    static void pop(Stack s){
        if(!s.empty()){
            System.out.println(s.pop());
        } else {
            System.out.println("-1");
        }
    }

    static int size(Stack s) {
        System.out.println(s.size());
        return s.size();
    }

    static int empty(Stack s) {
        if(s.empty()){
            return 1;
        } else {
            return 0;
        }
    }

    static void top(Stack s) {
        if(s.empty()){
            System.out.println("-1");
        } else {
            System.out.println(s.peek());
        }
    }
}
