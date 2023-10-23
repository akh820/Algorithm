import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner scn = new Scanner(System.in);
		 
		int t = scn.nextInt();
		int arr[] = new int[t];
		
		for (int k = 0; k < t; k++) {
			int a = scn.nextInt();
			int b = scn.nextInt();
			arr[k] = a+b;
		}
		for ( int a : arr) {
			System.out.println(a);
		}
	}
	}