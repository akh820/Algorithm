function solution(N, number) {
    const dp = Array.from({length:9}, () => new Set());
    
    for(let i = 1; i < 9 ; i++){
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = 1 ; j < i; j++){
            const k = i - j;
            for(const num1 of dp[j]){
                for(const num2 of dp[k]){
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
    // for(const e of dp){
    //     console.log(e)
    // }
    return -1;
}