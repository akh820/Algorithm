function solution(maps) {
    /*
    [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,1],
    [0,0,0,0,1]
    ]	
    */
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const endX = maps[0].length - 1;
    const endY = maps.length - 1;
    
    const queue = [[0,0,1]]; // 스타트 라인(0,0에서 시작했다고 가정)
    while(queue.length > 0){
        const [x, y, distance] = queue.shift();
        if(x === endX && y === endY){
            return distance;
        }
        
        for(let i = 0 ; i < 4 ; i++){
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            
            if(nx >= 0 && nx <= endX && ny >=0 && ny <= endY && maps[ny][nx] === 1){
                maps[ny][nx] = 0;
                queue.push([nx,ny, distance + 1]);
            }
        }
    }
    return -1;
}