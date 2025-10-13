function solution(n, s, a, b, fares) {
    const nodeList = Array.from({length:n+1}, () => Array(n+1).fill(1000001));
    for(const [a,b, fare] of fares){
        nodeList[a][b] = fare;
        nodeList[b][a] = fare;
    }
    for(let i = 1; i <= n; i++){
        nodeList[i][i] = 0;
    }
    for(let i = 1; i <= n ; i++){
        for(let j = 1; j <= n ; j++){
            for(let k = 1; k <= n ; k++){
                nodeList[j][k] = Math.min(nodeList[j][k], nodeList[j][i] + nodeList[i][k]);
            }
        }   
    }
    let minFare = nodeList[s][a] + nodeList[s][b];
;
    for(let i = 1; i <= n ; i++){
        const shared = nodeList[s][i] + nodeList[i][a] + nodeList[i][b];
        if(shared < minFare){
            minFare = shared;
        }
    }
    return minFare;
}