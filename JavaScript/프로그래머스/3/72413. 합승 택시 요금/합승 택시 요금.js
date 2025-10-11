function solution(n, s, a, b, fares) {
    const root = Array.from({length: n+1} , () => Array(n+1).fill(Infinity));
    for(let i = 1 ; i <= n ; i++){
        root[i][i] = 0;
    }
    for(const [a,b, fare] of fares){
        root[a][b] = fare;
        root[b][a] = fare;
    }
    
    for(let i = 1; i <=n ; i++){
        for(let j = 1; j <=n ; j++){
            for(let k = 1; k <=n ; k++){
                root[j][k] = Math.min(root[j][k], root[j][i] + root[i][k]);
            }
        }    
    }
    let minFare = root[s][a]+root[s][b];
    
    for(let i = 1; i <= n; i++){
        const sharedFare = root[s][i] + root[i][a] + root[i][b];
        minFare = Math.min(sharedFare, minFare);
    }
    return minFare;
}