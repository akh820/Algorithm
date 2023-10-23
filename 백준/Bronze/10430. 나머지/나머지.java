import java.util.*;
	public class Main{
		public static void main (String[]args) {
			Scanner scn = new Scanner(System.in);
			String value = scn.nextLine();
			String values[]= value.split(" ");
			
			int a = Integer.parseInt(values[0]);
			int b = Integer.parseInt(values[1]);
			int c = Integer.parseInt(values[2]);
//(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
//
//(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
			int r1 = (a+b)%c; 
			int r2 = ((a%c) + (b%c))%c; 
			int r3 = (a*b)%c; 
			int r4 = ((a%c) * (b%c))%c;
			
			System.out.println(r1);
			System.out.println(r2);
			System.out.println(r3);
			System.out.println(r4);
			
		}
	}