class Solution {
    public int[] solution(int[] num_list) {
        int[] result = new int[2];
        int a = 0;
        int b = 0;
        for(int e: num_list){
            if(e % 2 == 0){
                a++;
            }else{
                b++;
            }
        }
        result[0] = a;
        result[1] = b;
        return result;
    }
}