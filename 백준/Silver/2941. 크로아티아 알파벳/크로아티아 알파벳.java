import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        
        Scanner scn = new Scanner(System.in);

        String str = scn.nextLine();

        int count = 0;

        char Strings [] = new char[str.length()];

        for ( int i = 0 ; i < str.length(); i++ ){
            Strings[i] = str.charAt(i);
        }

        for ( int i = 0 ; i < str.length(); i++ ){ //c단어 일때
            if (Strings[i] == 'c'){
                if ( i < str.length() - 1){
                    if (Strings[i+1] == '=' || Strings[i+1] == '-' ){
                        i += 1;
                    }
                }
            }
            else if (Strings[i] == 'd'){ // d일때
                if ( i < str.length() - 1){
                    if (Strings[i+1] == '-' ){
                        i += 1;
                    }                
                    else if(Strings[i+1] == 'z' ){
                        if ( i < str.length() - 2){
                            if(Strings[i+2] == '='){
                                    i += 2;
                            }
                        }
                    }
                
                }
            }
            else if (Strings[i] == 'l'){ //l일때
                if ( i < str.length() - 1){
                    if (Strings[i+1] == 'j'){
                        i += 1;
                    }
                }
            }
            else if (Strings[i] == 'n'){ //n일때
                if ( i < str.length() - 1){
                    if (Strings[i+1] == 'j'){
                        i += 1;
                    }
                }
            }
            else if (Strings[i] == 's'){ //s일때
                if ( i < str.length() -1 ) {
                    if (Strings[i+1] == '='){
                        i += 1;
                    }
                }
            }
            else if (Strings[i] == 'z'){ //z일때
                if ( i < str.length() - 1){           
                    if (Strings[i+1] == '='){
                        i += 1;
                    }
                }
            }
            count++;
        }
        System.out.println(count);
    }
}
