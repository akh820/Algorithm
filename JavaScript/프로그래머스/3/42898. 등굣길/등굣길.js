function solution(m, n, puddles) {
    const road = Array.from({length: n + 1}, () => Array(m+1).fill(0)) ;
    // road[1][2] = 1; // y,x
    for(const [x, y] of puddles){
        road[y][x] = -1;
    }
    road[1][1] = 1;
    for(let y = 1; y <= n ; y++){
        for(let x = 1; x <= m; x++){
            if(road[y][x] === -1){
                road[y][x] = 0;
                continue;
            }
            if( y > 1){
                road[y][x] = (road[y][x] + road[y-1][x]) % 1000000007;
            }
            if( x > 1){
                road[y][x] = (road[y][x] + road[y][x-1]) % 1000000007;
            }
        }
    }
    return road[n][m];
}