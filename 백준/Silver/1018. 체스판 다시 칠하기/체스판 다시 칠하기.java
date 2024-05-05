import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Objects;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] sizes = br.readLine().split(" ");
        int M = Integer.parseInt(sizes[0]);
        int N = Integer.parseInt(sizes[1]);
        String[][] chess = new String[M][N];

        int min = Integer.MAX_VALUE;
        for (int i = 0; i < M; i++) {
            String line = br.readLine();
            for (int j = 0; j < N; j++) {
                chess[i][j] = String.valueOf(line.charAt(j));
            }
        }

        for(int i = 0; i <= M-8; i++) {
            for(int j = 0; j <= N-8; j++) {
                int count = Math.min(W(i,j,chess),B(i,j,chess));
                if(min > count) {
                    min = count;
                }
            }
        }
        System.out.println(min);

        br.close();  // 자원 해제
    }

    public static int W(int i, int j, String[][] chess){
        String[][] blackChess = new String[8][8];
        int lc = 0;
        for(int a = 0; a < 8 ; a++){
            for (int b = 0; b < 8; b++) {
                if(lc % 2 == 0){
                    if (b % 2 == 0) {
                        blackChess[a][b] = "W";
                    } else {
                        blackChess[a][b] = "B";
                    }
                } else {
                    if (b % 2 == 0) {
                        blackChess[a][b] = "B";
                    } else {
                        blackChess[a][b] = "W";
                    }
                }

            }
            lc++;
        }


        int x = i;
        int y = j;

        String tempChess[][] = new String[8][8];
        // i, j 입력받았을때 i로 시작하고 j로 시작하는 8x8배열 만듬
        for(int a = 0; a < 8 ; a++){
            for(int b = 0; b < 8; b++){
                tempChess[a][b] = chess[x][y];
                y++;
            }
            y = j;
            x++;
        }
//        System.out.println("입력받은 체스판");
//        for(int p = 0; p < 8 ; p++){
//            for(int q = 0; q < 8; q++){
//                System.out.print(tempChess[p][q]+ " ");
//            }
//            System.out.println();
//        }
//        System.out.println("--------------비교할 체스판---------------");
//        for(int p = 0; p < 8 ; p++){
//            for(int q = 0; q < 8; q++){
//                System.out.print(blackChess[p][q]+ " ");
//            }
//            System.out.println();
//        }
        int count = 0;
        for(int p = 0; p < 8 ; p++){
            for(int q = 0; q < 8; q++){
                if(Objects.equals(tempChess[p][q], blackChess[p][q])){

                } else {
                    count++;
                }
            }
        }
//        System.out.println(count);

        return count;
    }

    public static int B(int i, int j, String[][] chess){
        String[][] blackChess = new String[8][8];
        int lc = 0;
        for(int a = 0; a < 8 ; a++){
            for (int b = 0; b < 8; b++) {
                if(lc % 2 == 0){
                    if (b % 2 == 0) {
                        blackChess[a][b] = "B";
                    } else {
                        blackChess[a][b] = "W";
                    }
                } else {
                    if (b % 2 == 0) {
                        blackChess[a][b] = "W";
                    } else {
                        blackChess[a][b] = "B";
                    }
                }

            }
            lc++;
        }


        int x = i;
        int y = j;

        String tempChess[][] = new String[8][8];
        // i, j 입력받았을때 i로 시작하고 j로 시작하는 8x8배열 만듬
        for(int a = 0; a < 8 ; a++){
            for(int b = 0; b < 8; b++){
                tempChess[a][b] = chess[x][y];
                y++;
            }
            y = j;
            x++;
        }
//        System.out.println("입력받은 체스판");
//        for(int p = 0; p < 8 ; p++){
//            for(int q = 0; q < 8; q++){
//                System.out.print(tempChess[p][q]+ " ");
//            }
//            System.out.println();
//        }
//        System.out.println("--------------비교할 체스판---------------");
//        for(int p = 0; p < 8 ; p++){
//            for(int q = 0; q < 8; q++){
//                System.out.print(blackChess[p][q]+ " ");
//            }
//            System.out.println();
//        }
        int count = 0;
        for(int p = 0; p < 8 ; p++){
            for(int q = 0; q < 8; q++){
                if(Objects.equals(tempChess[p][q], blackChess[p][q])){

                } else {
                    count++;
                }
            }
        }
//        System.out.println(count);


//        int count = 0;
//        int lineCount = 0;
//        for (int k = 0; k < 8; k++) {
//            for (int l = 0; l < 7; l++) {
//                if(lineCount % 2 == 0){
//                    //홀수 라인의 경우 무조건 B로 스타트해야함
//                    if(tempChess[k][l].equals("B")){
//                        if(tempChess[k][l+1].equals("W")){
//
//                        } else {
//                            tempChess[k][l+1]= "W";
//                            count++;
//                        }
//                    }
//                } else {
//                    //짝수 라인의 경우 무조건 W로 스타트해야함
//                    if(!tempChess[k][l].equals("W")){ //B라서 W 넣ㅇ
//                        if(tempChess[k][l+1].equals("B")){
//                            tempChess[k][l]= "W";
//                            count++;
//                        }
//                    }
//                }
//            }
//            lineCount++;
//        }
//
//        System.out.println("바뀐체스판");
//        for(int a = 0; a < 8 ; a++){
//            for(int b = 0; b < 8; b++){
//                System.out.print(tempChess[a][b]+ " ");
//            }
//            System.out.println();
//        }

        return count;
    }
}
