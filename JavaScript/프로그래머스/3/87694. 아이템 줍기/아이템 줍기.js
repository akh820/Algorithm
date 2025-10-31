function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    const recs = rectangle.map(([a,b,c,d]) => [a * 2 ,b * 2 ,c * 2 ,d * 2]);
    
    const boundarySet = new Set();
    
    for(let [x1,y1,x2,y2] of recs){
        for(let i = x1 ; i <= x2; i++){
            boundarySet.add(`${i},${y1}`);
            boundarySet.add(`${i},${y2}`);
        }
        for(let i = y1 ; i <= y2; i++){
            boundarySet.add(`${x1},${i}`);
            boundarySet.add(`${x2},${i}`);
        }
    }
    
    const outBoundarySet = new Set();
    for(const e of boundarySet){
        const [x,y] = e.split(",").map(Number);
        let isInside = false;
        for(const [x1,y1,x2,y2] of recs){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                isInside = true;
                break
            }
        }
        if(!isInside){
            outBoundarySet.add(`${x},${y}`);
        }
    }
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const queue = [[characterX * 2, characterY * 2, 0]];
    
    const isVisited = {};
    
    for(const e of outBoundarySet){
        isVisited[e] = false;
    }
    
    isVisited[`${characterX * 2},${characterY * 2}`] = true;
    
    while(queue.length > 0){
        const [x,y,distance] = queue.shift();
        if(x === itemX * 2 && y === itemY * 2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4 ; i ++){
            const nx = dx[i] + x
            const ny = dy[i] + y
            if(isVisited[`${nx},${ny}`] === false){
                isVisited[`${nx},${ny}`] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}