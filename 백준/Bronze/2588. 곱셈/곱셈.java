import java.util.*;
	public class Main{
		public static void main (String[]args) {
			Scanner scn = new Scanner(System.in);

			int a = scn.nextInt();
			String b = scn.next();
			
			scn.close();
			
			System.out.println(a * (b.charAt(2)-'0'));
			System.out.println(a * (b.charAt(1)-'0'));
			System.out.println(a * (b.charAt(0)-'0'));
			System.out.println(a * Integer.parseInt(b));

		}
	}