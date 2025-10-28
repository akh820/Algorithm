function solution(k, dungeons) {
        
    const N = dungeons.length;
    
    const isVisited = Array(N).fill(false);
    
    let max = 0;
    
    dfs(k, 0);
    
    function dfs(currentFatigue, clearCount){
        max = Math.max(max, clearCount);
        for(let i = 0 ; i < N ; i++){
            const [required, usedFatigue] = dungeons[i];
            if(isVisited[i] === false && currentFatigue >= required){
                isVisited[i] = true;
                dfs(currentFatigue - usedFatigue, clearCount + 1);
                isVisited[i] = false;
            }
        }
    }
    
    return max;
}