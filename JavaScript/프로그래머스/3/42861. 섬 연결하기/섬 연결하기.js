function solution(n, costs) {
    
    costs.sort((a,b) => a[2] - b[2]);
    
    const nodes = Array.from({length: n + 1}, (_,i) => i);
    
    let total = 0;
    
    for(const [start, end, cost] of costs){
        if(!unionAB(start,end)){
            total += cost;
        }
    }
    
    function findRoot(e) {
        if(nodes[e] === e){
            return e;
        }
        
        return nodes[e] = findRoot(nodes[e]);
    }
    
    function unionAB(a, b) {
        const rootA = findRoot(a);
        const rootB = findRoot(b);
        
        if(rootA !== rootB){
            nodes[rootB] = rootA;
            return false;
        }
        
        return true; //결합할 필요가없음
    }
    
    return total;
}