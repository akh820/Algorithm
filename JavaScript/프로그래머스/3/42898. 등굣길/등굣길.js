function solution(m, n, puddles) {
    const dp = Array.from({length : n + 1}, () => Array(m+1).fill(0));
    
    dp[1][1] = 1;
    
    for(const [x,y] of puddles){
        dp[y][x] = -1;
    }
    //m => y, n => x
    const num = 1000000007
    for(let y = 1; y <= n; y++){
        for(let x = 1; x <= m; x++){
            if(dp[y][x] === -1){
                dp[y][x] = 0;
                continue;
            }
            
            if( x > 1 ){
                dp[y][x] = (dp[y][x-1] + dp[y-1][x]) % num;
            }
            if( y > 1 ){
                dp[y][x] = (dp[y-1][x] + dp[y][x-1]) % num;
            }
        }
    }
    
    // for(const e of dp){
    //     console.log(e);
    //     console.log("-------------");
    // }
    return dp[n][m];
}