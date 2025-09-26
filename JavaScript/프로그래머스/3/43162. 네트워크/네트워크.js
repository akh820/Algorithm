function solution(n, computers) {
    // 1. 모든 노드를 다 돌아야함
    const visited = new Array(n).fill(false);
    let network = 0;
    for(let i = 0 ; i < n; i++){
        if(visited[i] === false){
            //방문된적 없으면 새로운 네트워크
            network++;
            dfs(i);
        }
    }
    // 2. 연결된놈부터 다시 dfs
    function dfs(startNode){
        visited[startNode] = true;
        for(let i = 0; i < n ; i++){
            if(computers[startNode][i] === 1 && visited[i] === false){
                dfs(i);
            }
        }
    };
    return network;
}