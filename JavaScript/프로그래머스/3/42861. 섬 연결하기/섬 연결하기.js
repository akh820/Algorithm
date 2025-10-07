function solution(n, costs) {
    const rootNodes = Array.from({length:n}, (_,i) => i);
    
    let min = 0;
    
    costs.sort((a,b) => a[2] - b[2]);
    
    for(const [a,b, distance] of costs){
        if(unionAB(a, b)) {
            min += distance;
        }
    }
    
    function findRootNode(node) {
        if(rootNodes[node] === node) {
            return node;
        }
        return rootNodes[node] = findRootNode(rootNodes[node]);
    }
    
    function unionAB(a, b){
        const rootA = findRootNode(a);
        const rootB = findRootNode(b);
        if(rootA !== rootB){
            rootNodes[rootB] = rootA;
            return true
        }
        return false;
    }
    
    return min;
}