function solution(n, computers) {
    
    const N = computers.length;
    
    const visited = Array(n).fill(false);
    let networkCount = 0;
    
    for(let i = 0 ; i < N ; i++){
        if(visited[i] === false){
            networkCount++;
            dfs(i);
        }
    }
    
    function dfs(startNode){
        visited[startNode] = true;
        for(let i = 0 ; i < computers[startNode].length; i++){
            if(computers[startNode][i] === 1 && visited[i] === false){
                dfs(i);
            }
        }
    }
    
    return networkCount;
}