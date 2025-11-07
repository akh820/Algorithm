function solution(n, s, a, b, fares) {
    const nodes = Array.from({length:n + 1} , () => Array(n+1).fill(Infinity));
    
    for(const [start, end, fare] of fares){
        nodes[start][end] = fare;
        nodes[end][start] = fare;
    }
    for(let i = 0 ; i < nodes.length;i++){
        nodes[i][i] = 0;
    }
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 1; k <= n; k++){
                if((nodes[j][i] + nodes[i][k]) < nodes[j][k]){
                   nodes[j][k] = nodes[j][i] + nodes[i][k];
                };
            }
        }    
    }
    
    let minFare = nodes[s][a] + nodes[s][b];
    for(let i = 1 ; i <= n; i++){
        const shared = nodes[s][i] + nodes[i][a] + nodes[i][b];
        minFare = Math.min(shared, minFare);
    }
    
    // let i = 0;
    // for(const e of nodes){
    //     console.log(i, e.toString());
    //     i++;
    // }
    return minFare;
}