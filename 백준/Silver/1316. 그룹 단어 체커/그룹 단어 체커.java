import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        int N = Integer.parseInt(scn.nextLine());
        
        int groupWordCount = N;

        
        for ( int x = 0 ; x < N ; x++){
            
            String input = scn.nextLine();
            
            boolean alphabet[] = new boolean[26];
            
            for( int i = 0 ; i < input.length()-1; i++){
                
                if ( input.charAt(i) != input.charAt(i+1)){
                    if ( alphabet[input.charAt(i+1)-'a'] == true ){
                        groupWordCount--;
                        break;
                    }

                }

                alphabet[input.charAt(i)-'a'] = true;
                
            }
        }
        System.out.println(groupWordCount);
    }
}
