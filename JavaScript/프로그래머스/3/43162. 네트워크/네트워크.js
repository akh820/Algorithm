function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let network = 0;
    
    for(let i = 0 ; i < n; i++){
        if(!visited[i]){
            network++;
            dfs(i);
        }
    }
    
    function dfs(startNode){
        visited[startNode] = true;
        for(let i = 0 ; i < n ; i++){
            if(computers[startNode][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    return network;
    
}