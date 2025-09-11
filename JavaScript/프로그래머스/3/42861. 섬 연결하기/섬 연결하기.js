function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2]);
    
    const rootNode = Array.from({length : n }, (_,i) => i);
    
    const findRoot = (e) => {
        if(rootNode[e] === e){
            return e; // 루토노드가 자기 자신
        }
        return rootNode[e] = findRoot(rootNode[e]);
    }
    
    const unionRoot = (a, b) => {
        const rootA = findRoot(a);
        const rootB = findRoot(b);
        
        if(rootA !== rootB){
            rootNode[rootB] = rootA;
            return true;
        }
        return false;
    }
    
    let totalCost = 0;
    for(const cost of costs){
        const [a, b, line] = cost;
        if(unionRoot(a,b)){
            totalCost += line;
        }
    }
    
    return totalCost;
}