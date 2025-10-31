function solution(n, computers) {
    const N = computers.length;
    
const isVisited = Array(n).fill(false);    
    let networkCount = 0;
    
    for(let i = 0 ; i < N ; i++){
        if(isVisited[i] === false){
            networkCount++;
            dfs(i);
        }
    }
    
    
    function dfs(startNode){
        isVisited[startNode] = true;
        
        for(let i = 0 ; i < computers.length; i++){
            if(computers[startNode][i] === 1 && isVisited[i] === false){
                dfs(i);
            }
        }
    }
    
    return networkCount;
}