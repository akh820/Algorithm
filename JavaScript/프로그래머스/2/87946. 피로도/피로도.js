function solution(k, dungeons) {
    /*
    방문했는지 안했는지 체크 리스트
    */
    
    const isVisited = Array(dungeons.length).fill(false);
    
    let maxCount = 0;
    
    dfs(k,0);
    
    function dfs(currentFatigue, clearCount){
        maxCount = Math.max(clearCount, maxCount);
        for(let i = 0 ; i < dungeons.length; i++){
            const [required, usedFatigue] = dungeons[i];
            if(currentFatigue >= required && isVisited[i] === false){
                isVisited[i] = true;
                dfs(currentFatigue - usedFatigue, clearCount + 1);
                isVisited[i] = false;
            }
        }
    }
    
    return maxCount;
}