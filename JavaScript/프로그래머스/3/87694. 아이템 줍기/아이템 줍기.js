function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1. 모든 좌표를 2배로 확장
    const expandedRects = rectangle.map(([x1, y1, x2, y2]) => [x1*2, y1*2, x2*2, y2*2]);
    
    // 2. 모든 직사각형의 테두리 점들 수집
    const borderPoints = new Set();
    
    for(const [x1, y1, x2, y2] of expandedRects) {
        // 상하 변의 모든 점
        for(let i = x1; i <= x2; i++) {
            borderPoints.add(`${i},${y1}`);
            borderPoints.add(`${i},${y2}`);
        }
        // 좌우 변의 모든 점
        for(let i = y1; i <= y2; i++) {
            borderPoints.add(`${x1},${i}`);
            borderPoints.add(`${x2},${i}`);
        }
    }
    
    // 3. 내부 점들 제거 (다른 직사각형의 내부에 있는 점들)
    const validPoints = new Set();
    for(const pointStr of borderPoints) {
        const [x, y] = pointStr.split(',').map(Number);
        let isInside = false;
        
        // 이 점이 어떤 직사각형의 내부에 있는지 확인
        for(const [x1, y1, x2, y2] of expandedRects) {
            if(x > x1 && x < x2 && y > y1 && y < y2) {
                isInside = true;
                break;
            }
        }
        
        // 내부에 있지 않은 점만 유효한 이동 경로
        if(!isInside) {
            validPoints.add(pointStr);
        }
    }
    
    // 4. BFS로 최단 경로 찾기
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
        
        // 목표 지점에 도달했는지 확인
        if(x === itemX * 2 && y === itemY * 2) {
            return distance / 2; // 2배 확장했으므로 다시 2로 나누기
        }
        
        // 상하좌우 4방향 탐색
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
    
    return -1; // 도달할 수 없는 경우 (실제로는 발생하지 않음)
}