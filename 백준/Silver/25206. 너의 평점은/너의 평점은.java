import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        double credits = 0;
        double grades = 0;
        // double result = 0;
    
        for( int x = 1 ; x <= 20 ; x++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String subjectName = st.nextToken();
            double credit = Double.parseDouble(st.nextToken());
            String grade = st.nextToken();    

            if(grade.equals("A+")){
                credits += credit *4.5;
                grades += credit;
            }
            else if (grade.equals("A0")){
                credits += credit *4.0;
                grades += credit;
            }
            else if (grade.equals("B+")){
                credits += credit *3.5;
                grades += credit;
            }
            else if (grade.equals("B0")){
                credits += credit *3.0;
                grades += credit;
            }
            else if (grade.equals("C+")){
                credits += credit *2.5;
                grades += credit;
            }
            else if (grade.equals("C0")){
                credits += credit *2.0;
                grades += credit;
            }
            else if (grade.equals("D+")){
                credits += credit *1.5;
                grades += credit;
            }
            else if (grade.equals("D0")){
                credits += credit *1.0;
                grades += credit;
            }
            else if (grade.equals("F")){
                credits += credit *0;
                grades += credit;
            }


        }
        System.out.printf("%,6f", credits / grades);
    }
}
