function solution(n, edge) {
    // 양방향 노드가 있는 리스트 
    // 최소 길이를 저장하는 맵
    // DFS방식
    const connectedList = Array.from({length: n + 1}, ()=>[]);
    
    for(const [a,b] of edge){
        connectedList[a].push(b);
        connectedList[b].push(a);
    }
    const distanceList = Array(n+1).fill(-1);
    
    const queue = [1]; // 초기노드 1에서 시작
    distanceList[1] = 0;
    while(queue.length > 0){
        const node = queue.shift(); // node 1 에서 시작
        for(const side of connectedList[node]){
            if(distanceList[side] === -1){
                distanceList[side] = distanceList[node] + 1;
                queue.push(side);
            }
        }
    }
    const max = Math.max(...distanceList)
    return distanceList.filter( e => e === max).length;
}