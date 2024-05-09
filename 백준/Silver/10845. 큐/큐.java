import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Queue<Integer> q = new LinkedList<>();
        int N = Integer.parseInt(br.readLine());
        int last = -1;
        for(int i = 0; i < N; i++){
            String[] order = br.readLine().split(" ");
            if(order[0].equals("push")){
                last = push(q, Integer.parseInt(order[1]));
            } else if(order[0].equals("front")){
                front(q);
            } else if(order[0].equals("size")){
                size(q);
            } else if(order[0].equals("empty")){
                System.out.println(empty(q));
            } else if(order[0].equals("pop")){
                pop(q);
                if(q.isEmpty()){
                    last = -1;
                }
            } else if(order[0].equals("back")){
                System.out.println(last);
            }
        }


    }
    static int push(Queue s, int i) {
        s.offer(i);
        return i;
    }

    static void pop(Queue s){
        if(!s.isEmpty()){
            System.out.println(s.poll());
        } else {
            System.out.println("-1");
        }
    }

    static int size(Queue s) {
        System.out.println(s.size());
        return s.size();
    }

    static int empty(Queue s) {
        if(s.isEmpty()){
            return 1;
        } else {
            return 0;
        }
    }

    static void front(Queue s) {
        if(s.isEmpty()){
            System.out.println("-1");
        } else {
            System.out.println(s.peek());
        }
    }
}
