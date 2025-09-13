function solution(k, dungeons) {
    
    const visited = new Array(dungeons.length).fill(false);
    
    let maxCount = 0;
    
    dfs(k, 0);
    
    function dfs (currentFatigue, clearCount) {
        maxCount = Math.max(maxCount, clearCount);
        for(let i = 0 ; i < dungeons.length; i++){
            const [requiredFatigue, cost] = dungeons[i];
            if(visited[i] === false && currentFatigue >= requiredFatigue){
                visited[i] = true;
                dfs(currentFatigue - cost, clearCount + 1);
                visited[i] = false;
            }
        }
    }
    
    return maxCount;
}