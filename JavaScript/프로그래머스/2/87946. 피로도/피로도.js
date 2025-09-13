function solution(k, dungeons) {
    let maxClearDungeon = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const dfs = (currentFatigue, clearCount) => {
        maxClearDungeon = Math.max(maxClearDungeon, clearCount); 
        for (let i = 0; i < dungeons.length; i++) {
            const [minRequired, cost] = dungeons[i];
            if (!visited[i] && currentFatigue >= minRequired) {
                visited[i] = true; 
                dfs(currentFatigue - cost, clearCount + 1);
                visited[i] = false; 
            }
        }
    }
    dfs(k, 0);

    return maxClearDungeon;
}