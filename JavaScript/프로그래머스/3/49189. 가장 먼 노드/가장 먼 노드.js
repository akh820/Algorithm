function solution(n, edge) {
    const nodes = Array.from({length:n + 1}, () => []);
    for(const [a,b] of edge){
        nodes[a].push(b);
        nodes[b].push(a);
    }
    
    const distances = Array(n+1).fill(-1);
    
    const queue = [1];
    distances[1] = 0;
    
    while(queue.length > 0){
        const currentNode = queue.shift();
        
        for(const e of nodes[currentNode]){
            if(distances[e] === -1){
                distances[e] = distances[currentNode] + 1;
                queue.push(e);
            }
        }
    }
    
    const maxDis = Math.max(...distances);
    
    return distances.filter(e => e === maxDis).length;
}