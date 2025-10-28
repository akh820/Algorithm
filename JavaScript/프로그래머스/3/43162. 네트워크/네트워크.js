function solution(n, computers) {
    
    const isConnected = Array(n).fill(false);
    let networkCount = 0;
    
    for(let i = 0 ; i < n; i ++){
        if(isConnected[i] === false){
            networkCount++; // 1
            dfs(i)
        }
    }
    
    function dfs(startNode){
        isConnected[startNode] = true;
        for(let i = 0 ; i < n; i++){
            if(computers[startNode][i] === 1 && isConnected[i] === false){
                dfs(i);
            }
        }
    }
    
    return networkCount;
}