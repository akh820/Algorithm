function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 정확한 테두리만 걸러내기 위해 2배확장
    const expandedRects = rectangle.map(([x1, y1, x2, y2]) => [x1*2, y1*2, x2*2, y2*2]);
    
    const borderPoints = new Set();
    
    for(const [x1, y1, x2, y2] of expandedRects) {
        for(let i = x1; i <= x2; i++) {
            borderPoints.add(`${i},${y1}`);
            borderPoints.add(`${i},${y2}`);
        }
        for(let i = y1; i <= y2; i++) {
            borderPoints.add(`${x1},${i}`);
            borderPoints.add(`${x2},${i}`);
        }
    }
    
    const validPoints = new Set();
    for(const pointStr of borderPoints) {
        const [x, y] = pointStr.split(',').map(Number);
        let isInside = false;
        
        for(const [x1, y1, x2, y2] of expandedRects) {
            if(x > x1 && x < x2 && y > y1 && y < y2) {
                isInside = true;
                break;
            }
        }
        
        if(!isInside) {
            validPoints.add(pointStr);
        }
    }
    
    const visited = new Map();
    for(const point of validPoints) {
        visited.set(point, false);
    }
    
    const queue = [[characterX * 2, characterY * 2, 0]];
    const startPoint = `${characterX * 2},${characterY * 2}`;
    visited.set(startPoint, true);
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    while(queue.length > 0) {
        const [x, y, distance] = queue.shift();
        
        if(x === itemX * 2 && y === itemY * 2) {
            return distance / 2; 
        }
        
        for(let i = 0; i < 4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];
            const nextPoint = `${nextX},${nextY}`;
            
            if(visited.has(nextPoint) && visited.get(nextPoint) === false) {
                visited.set(nextPoint, true);
                queue.push([nextX, nextY, distance + 1]);
            }
        }
    }
    
    return -1; 
}