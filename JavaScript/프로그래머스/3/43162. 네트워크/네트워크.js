function solution(n, computers) {
    const visited = new Array(n).fill(false);
    
    let count = 0;
    
    for(let i = 0 ; i < n ; i++){
        if(visited[i] === false){
            count++;
            dfs(i);
        }
    }
    
    function dfs(startNode){
        visited[startNode] = true;
        for(let i = 0; i < computers.length; i++){
            if(computers[startNode][i] === 1 && visited[i] === false){
                dfs(i);
            }
        }
    }
    
    return count
}


