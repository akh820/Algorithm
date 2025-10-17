function solution(N, number) {
    const dp = Array.from({length: 9} , () => new Set());
    for(let i = 1; i < 9; i++){
        dp[i].add(Number(String(N).repeat(i)));
        for(let j = 1 ; j < i ; j++){ // i가 2일때, j는 1, k는 1, 
            /*
            i가 3일때, 
            j가 1일때 k= 2, 
            j가 2일때 k = 1
            */;
            let k = i - j;
            for(const num1 of dp[k]){
                for(const num2 of dp[j]){
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if(num2 !== 0){
                        dp[i].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    return -1;
}