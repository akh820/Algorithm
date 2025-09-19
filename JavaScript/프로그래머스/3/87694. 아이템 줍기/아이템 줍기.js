function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    const expandedSquares = rectangle.map( rec => {
        const result = [];
        for(const e of rec){
            result.push(e * 2);
        }
        return result;
    })
    
    const linePoint = new Set();
    for(const [x1,y1,x2,y2] of expandedSquares){
        for(let i = x1 ; i <= x2; i++){
            linePoint.add(`${i},${y1}`);
            linePoint.add(`${i},${y2}`);
        }
        for(let i = y1 ; i <= y2; i++){
            linePoint.add(`${x1},${i}`);
            linePoint.add(`${x2},${i}`);
        }
    }
    
    const outlinePoint = new Set();
    for(const e of linePoint){
        const [x, y] = e.split(',').map(Number);
        let isInside = false;
        for(const [x1,y1,x2,y2] of expandedSquares){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                isInside = true;
                break;
            }
        }
        if(isInside === false){
            outlinePoint.add(`${x},${y}`);
        }
    }
        
    const visited = new Map();
    for(const e of outlinePoint){
        visited.set(e, false);
    }
        
    const queue = [[characterX * 2, characterY * 2, 0]];
    visited.set(`${characterX * 2},${characterY * 2}`,true);
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
        
    while(queue.length > 0){
        
        const [x, y, distance] = queue.shift();
        if( x === itemX * 2 && y === itemY * 2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4; i++){
            
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            const nextPoint = `${nx},${ny}`;
            
            if(visited.has(nextPoint) && visited.get(nextPoint) === false){
                visited.set(nextPoint, true);
                queue.push([nx,ny, distance + 1]);
            }
        }
    }
        
    return -1;
}