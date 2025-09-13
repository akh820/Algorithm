function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let network = 0;
    
    for(let i = 0 ; i < n ; i ++){
        if(!visited[i]){
            network++;
            dfs(i);
        }
    }
    
    function dfs(startNode) {
        //방문한곳 방문처리, 연결되있다는 뜻
        visited[startNode] = true;
        for(let i = 0 ; i < computers.length; i++){
            if(computers[startNode][i] === 1 && visited[i] === false){
                dfs(i);
            }
        }
    }
    
    return network;
}