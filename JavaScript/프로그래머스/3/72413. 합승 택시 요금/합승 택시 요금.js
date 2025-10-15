function solution(n, s, a, b, fares) {
    const nodes = Array.from({length : n + 1}, () => Array(n+1).fill(Infinity));
    for(const [start, end, fare] of fares){
        nodes[start][end] = fare;
        nodes[end][start] = fare;
    }
    for(let i = 1 ; i <= n ; i++){
        nodes[i][i] = 0;
    }
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n ; j++){
            for(let k = 1 ; k <= n ; k++){
                nodes[j][k] = Math.min(nodes[j][k], nodes[j][i] + nodes[i][k]);
            }
        }   
    }
    let minFare = nodes[s][a] + nodes[s][b];    
    for(let i = 1; i <= n; i++){
        const sharedFare = nodes[s][i] + nodes[i][a] + nodes[i][b];     
        minFare = Math.min(minFare, sharedFare);
    }
    return minFare;
}