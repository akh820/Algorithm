function solution(n, costs) {
    
    const roots = Array.from({length:n + 1} , (_,i) => i);
    
    costs.sort((a,b) => a[2] - b[2]);
    
    let totalCost = 0;
    for(const [start, end, cost] of costs){
        if(unionAB(start,end)){
            totalCost += cost;
        };
    }
    
    function findRoot(e){
        if(roots[e] === e){
            return e;
        }
        return roots[e] = findRoot(roots[e]);
    }
    
    function unionAB(a,b){
        const rootA = findRoot(a);
        const rootB = findRoot(b);
        
        if(rootA !== rootB){
            roots[rootB] = rootA;
            return true;
        }
        return false;
    }
    return totalCost;
}