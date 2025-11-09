function solution(n, computers) {
    
    const visited = Array(n).fill(false);
    
    let networkCount = 0;
    
    const dfs = (startNode) => {
        visited[startNode] = true;
        for(let i = 0 ; i < computers[startNode].length ; i++){
            if(!visited[i] && computers[startNode][i] === 1){
                dfs(i);
            }
        }
    }
    for(let i = 0 ; i < n ; i ++){
        if(!visited[i]){
            networkCount++;
            dfs(i);
        }
    }
    
    return networkCount;
}