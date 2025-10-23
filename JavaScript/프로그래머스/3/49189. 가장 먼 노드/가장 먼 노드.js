function solution(n, edge) {
   
    const connectedList = Array.from({length : n + 1} , () => []);
    for(const [a,b] of edge){
        connectedList[a].push(b);
        connectedList[b].push(a);
    }
    const distances = new Array(n + 1).fill(-1);
   
    const queue = [1];
    distances[1] = 0;
   
    while(queue.length > 0){
        const currentNode = queue.shift();
       
        for(const neighbor of connectedList[currentNode]){ // [3, 2]
            if(distances[neighbor] === -1){
                distances[neighbor] = distances[currentNode] + 1;
                queue.push(neighbor);
            }
        }
    }
   
    const maxDistance = Math.max(...distances);

    return distances.filter( e => e === maxDistance ).length;
}