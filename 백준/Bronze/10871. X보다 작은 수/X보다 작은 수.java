import java.util.Scanner;
 
public class Main {
	public static void main(String args[]){
		Scanner scn = new Scanner(System.in);
		
		int N = scn.nextInt();
		int X = scn.nextInt();
		
		int A [] = new int[N];
		
		for (int i = 0; i < N; i++) {
			int k = scn.nextInt();
			A[i] = k;
		}
		for (int i = 0; i < N; i++) {
			if (A[i] < X) {
				System.out.println(A[i]);
			}
		}
//		System.out.println(N);
//		for ( int k : A) {
//			System.out.println(k);
		
	}
}