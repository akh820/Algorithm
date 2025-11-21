function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2]);
    
    const rootNodes = Array.from({length: n}, (_,i) => i);
    
    let total = 0;
    
    for(const [a,b,cost] of costs){
        if(unionAB(a,b) === true){
            total += cost;     
        }
    }
    
    function unionAB(a, b) {
        const rootA = findRoot(a);
        const rootB = findRoot(b);
        
        if(rootA != rootB){
            rootNodes[rootA] = rootB;
            return true;
        }
        return false;
    }
        
    function findRoot(node){
        if(rootNodes[node] === node){
            return node;
        }
        return rootNodes[node] = findRoot(rootNodes[node]);
    }
    return total;
}