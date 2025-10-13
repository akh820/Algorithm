function solution(n, edge) {
    let nodeList = Array.from({length: n + 1}, () => []);
    for(const [a,b] of edge){
        nodeList[a].push(b);
        nodeList[b].push(a);
    }
    const queue = [1];
    
    const minDistance = Array(n+1).fill(-1);
    minDistance[1] = 0;
    while(queue.length > 0){
        const currentIdx = queue.shift();
        for(const e of nodeList[currentIdx]){
            if(minDistance[e] === -1){
                minDistance[e] = minDistance[currentIdx] + 1;
                queue.push(e);
            }
        }
    }
    const max = Math.max(...minDistance);
    return minDistance.filter(e => e === max).length;
}