function solution(n, results) {
    const graph = Array.from({length: n +1}, () => Array(n+1).fill(false));
    
    for(const [winner, loser] of results){
        graph[winner][loser] = true;
    }
    
    for(let k = 1; k <= n; k++){
        for(let i = 1; i <= n; i++){
            for(let j = 1; j <= n; j++){
                if(graph[i][k] && graph[k][j]){
                    graph[i][j] = true;
                }
            }
        }   
    }
    
    let answer = 0;
    for(let i = 1; i <= n; i++){
        let count = 0;
        for(let j = 1; j <=n; j++){
            if(graph[i][j] || graph[j][i]){
                count++;
            }
        }
        if(count === n - 1){
            answer++;
        }
    }
    return answer;
}