function solution(rectangle, characterX, characterY, itemX, itemY) {
    const extandedRecs = rectangle.map(e => {
        const arr = [];
        for(let i = 0 ; i < e.length; i++){
            arr.push(e[i] * 2);
        }
        return arr; 
    });
    
    const set = new Set();
    
    for( const [x1,y1,x2,y2] of extandedRecs ){
        for(let i = x1; i <= x2; i++){
            set.add(`${i},${y1}`);
            set.add(`${i},${y2}`);
        }
        for(let i = y1; i <= y2; i++){
            set.add(`${x1},${i}`);
            set.add(`${x2},${i}`);
        }
    }
    
    const newSet = new Set();
    for( const e of set ){
        const [x, y] = e.split(",").map(Number);
        let isInBoundary = false;
        
        for( const [x1,y1,x2,y2] of extandedRecs ){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                isInBoundary = true;
                break;
            }
        }
        if(!isInBoundary){
            newSet.add(`${x},${y}`);
        }
    }
    const visited = {};
    for(const e of newSet){
        visited[e] = false;
    }
        
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    const queue = [[characterX * 2 , characterY * 2 , 0]];
    visited[`${characterX * 2},${characterY * 2}`] = true;
    
    while(queue.length > 0){
        const [x, y, distance] = queue.shift();
        if(x === itemX * 2 && y === itemY * 2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4 ; i++){
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            const checkString = `${nx},${ny}`;
            
            if(visited[checkString] === false){
                visited[checkString] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    return -1;
}