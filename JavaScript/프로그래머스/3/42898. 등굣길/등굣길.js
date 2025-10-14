function solution(m, n, puddles) {
    const constant = 1000000007;
    const rootMap = Array.from({length:n+1}, () => Array(m+1).fill(0));
    //m => y , n => x
    for(const [x,y] of puddles){
        rootMap[y][x] = -1;
    }
    rootMap[1][1] = 1;
    for(let y = 1 ; y <= n; y++){
        for(let x = 1; x <= m; x++){
            if(rootMap[y][x] === -1){
                rootMap[y][x] = 0;
                continue;
            }
            if(x > 1){
                rootMap[y][x] += (rootMap[y][x-1] % constant);
            }
            if(y > 1){
                rootMap[y][x] += (rootMap[y-1][x] % constant);
            }
        }
    }
    return rootMap[n][m] % constant;
}