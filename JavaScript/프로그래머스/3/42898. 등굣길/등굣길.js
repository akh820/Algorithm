function solution(m, n, puddles) { // m 가로, n 세로
    const road = Array.from({length: n + 1}, () => Array(m+1).fill(0));
    for(const [y, x] of puddles){
        road[x][y] = -1;
    }
    for(let i = 1; i <= n ; i++){
        for(let j = 1; j <=m ; j++){
            if(i === 1 && j === 1){
                road[i][j] = 1;
            }
            if(road[i][j] === -1){
                road[i][j] = 0;
                continue;
            }
            if(j > 1){
                road[i][j] += road[i][j-1] % 1000000007;   
            }
            if(i > 1){
                road[i][j] += road[i-1][j] % 1000000007;
            }
        }
    }
    // for(const e of road){
    //     console.log(e.toString());
    // }
    return road[n][m] % 1000000007;
}