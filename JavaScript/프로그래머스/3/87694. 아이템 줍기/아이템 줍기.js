function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    const recs = rectangle.map(([x1,y1,x2,y2]) => [x1 * 2,y1* 2,x2* 2,y2* 2]);
    
    const set1 = new Set(); // 테두리 전부를 
    
    for(const [x1,y1,x2,y2] of recs){
        for(let i = x1; i <= x2; i++){
            set1.add(`${i},${y1}`);
            set1.add(`${i},${y2}`);
        }
        for(let i = y1; i <= y2; i++){
            set1.add(`${x1},${i}`);
            set1.add(`${x2},${i}`);
        }
    }
    
    const set2 = new Set(); // 테두리 전부 중에서 안에있는 테두리 걷어냄
    
    for(const e of set1){// e = "1,3,2,4"
        const [x,y] = e.split(",").map(Number);
        
        let isInBoundary = false;
        
        for(const [x1,y1,x2,y2] of recs){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                isInBoundary = true;
                break;
            }
        }
        if(!isInBoundary){
            set2.add(`${x},${y}`);
        }
    }
    
    const isVisited = new Map();
    for(const e of set2){
        isVisited.set(e, false);
    }
    isVisited.set(`${characterX *2},${characterY*2}`, true);
    
    let dx = [-1,1,0,0];
    let dy = [0,0,1,-1];
    
    const queue = [[characterX*2, characterY*2, 0]];
    
    while(queue.length > 0){
        const [x, y, distance] = queue.shift();
        if(x === itemX * 2 && y === itemY * 2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4; i++){
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if(isVisited.get(`${nx},${ny}`) === false){
                isVisited.set(`${nx},${ny}`,true);
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}