function solution(rectangle, characterX, characterY, itemX, itemY) {
    //2배 늘리기
    const extandedRects = rectangle.map(([x1,y1,x2,y2]) => [x1*2,y1*2,x2*2,y2*2]);
    
    const beforeSet = new Set();
    for(const [x1,y1,x2,y2] of extandedRects){
        for(let i = x1; i <= x2; i++){
            beforeSet.add(`${i},${y1}`);
            beforeSet.add(`${i},${y2}`);
        }
        for(let i = y1; i <= y2; i++){
            beforeSet.add(`${x1},${i}`);
            beforeSet.add(`${x2},${i}`);
        }
    }
    const afterSet = new Set();
    for(const e of beforeSet){
        const [x, y] = e.split(",").map(Number);
        let inSide = false;
        for(const [x1,y1,x2,y2] of extandedRects){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                inSide = true;
                break;
            }
        }
        if(inSide === false){
            afterSet.add(`${x},${y}`);
        }
    }
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const queue = [[characterX*2, characterY*2,0]];
    
    const visited = {};
    for(const e of afterSet){
        visited[e] = false;
    }
    visited[`${characterX*2},${characterY*2}`] = true;
    
    while(queue.length > 0){
        const [x,y,distance] = queue.shift();
        if(x === itemX * 2 && y === itemY * 2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4; i ++){
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            const nextPoint = `${nx},${ny}`;
            if(visited[nextPoint] === false){
                visited[nextPoint] = true;
                queue.push([nx, ny, distance+1]);
            }
        }
    }
    
    return -1;
}