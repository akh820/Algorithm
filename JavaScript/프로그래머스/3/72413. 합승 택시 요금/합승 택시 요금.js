function solution(n, s, a, b, fares) {
    const dist = Array.from({length: n+1}, () => Array(n+1).fill(Infinity));
    
    for(let i = 1 ; i <= n; i++){
        dist[i][i] = 0;
    }
    for(const [c,d,fare] of fares){
        dist[c][d] = fare;
        dist[d][c] = fare;
    }
    // for(const e of dist){
    //     console.log(e);
    //     console.log("------------------");
    // }
    for(let k = 1 ; k <= n; k++){ // 경유 노드
        for(let i = 1 ; i <= n ; i++){// 시작 노드
            for(let j = 1; j <=n ; j++){// 도착지 노드
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    let min_fare = Infinity;
    for(let k = 1; k <= n ; k++){
        if(min_fare > (dist[s][k] + dist[k][a] + dist[k][b])){
            min_fare = dist[s][k] + dist[k][a] + dist[k][b];
        }
    }
    return min_fare;
}