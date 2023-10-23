import java.util.*;
public class Main {
	public static void main(String[] args){
		Scanner scn = new Scanner(System.in);
		
		// System.out.println("입력 받은 값 : "+inputValue);
		
		int n = scn.nextInt();
		
		for ( int k = 1; k <=9 ; k ++) {
			int result = k*n;
			System.out.println(n+" * "+k+" = "+result);
		}
	}
	}