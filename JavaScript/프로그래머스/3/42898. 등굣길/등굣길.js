function solution(m, n, puddles) {
    const number = 1000000007
    const dp = Array.from({length : n + 1}, () => Array( m + 1).fill(0));
    // xy 뒤집혀있는거 자각할것 m = y, n = x;
    for(const [x,y] of puddles){
        dp[y][x] = -1;
    }
    dp[1][1] = 1
    // m(x) = 4 , n(y) = 3
    for(let y = 1; y <= n; y++){
        for(let x = 1; x <= m; x++){
            if(dp[y][x] === -1){
                dp[y][x] = 0;
                continue;
            } 
            if( x > 1 ){
                dp[y][x] = (dp[y][x] + dp[y][x-1]) % number;
            }
            if( y > 1 ){
                dp[y][x] = (dp[y][x] + dp[y-1][x]) % number;
            }
        }
    }
    return dp[n][m];
}