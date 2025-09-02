function solution(maps) {
    const n = maps[0].length;
    const m = maps.length;
    
    const dy = [-1,1,0,0];
    const dx = [0,0,-1,1];
    
    const queue = [[0,0,1]]; 
    
    maps[0][0] = 0;
    
    while(queue.length > 0){
        
        const [y, x, distance] = queue.shift();
        if(y === m - 1 && x === n - 1){
            return distance;
        }
        
        for(let i = 0 ; i < 4; i++){
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if(ny >= 0 && ny < m && nx >= 0 && nx < n && maps[ny][nx] === 1){
                maps[ny][nx] = 0;
                queue.push([ny, nx, distance + 1]);
            }
        }

    }
        return -1;
    
}