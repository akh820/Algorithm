function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    const double = rectangle.map(([x1,y1,x2,y2]) => [x1*2,y1*2,x2*2,y2*2]);
    
    const aSet = new Set();
    
    for(const [x1,y1,x2,y2] of double){
        for(let i = x1; i <= x2; i++){
            aSet.add(`${i},${y1}`);
            aSet.add(`${i},${y2}`);
        }
        for(let i = y1; i <= y2; i++){
            aSet.add(`${x1},${i}`);
            aSet.add(`${x2},${i}`);
        }
    }
    const bMap = new Map();
    
    for(const e of aSet){
        const [x, y] = e.split(",").map(Number);
        let isIn = false;
        for(const [x1,y1,x2,y2] of double){
            if(x > x1 && x < x2 && y > y1 && y < y2){
                isIn = true;
                break;
            }
        }
        if(!(isIn === true)){
            bMap.set(`${x},${y}`, false);
        }
    }
    
    const queue = [[characterX*2, characterY*2, 0]];
    
    bMap.set(`${characterX*2},${characterY*2}`, true);
    
    const dx = [-1,1,0,0];
    const dy = [0,0,-1,1];
    
    while(queue.length > 0){
        const [x, y, distance] = queue.shift();
        if(x === itemX*2 && y === itemY*2){
            return distance / 2;
        }
        
        for(let i = 0 ; i < 4; i++){
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            const temp = `${nx},${ny}`;
            if(bMap.has(temp) && bMap.get(temp) === false){
                bMap.set(temp,true);
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}