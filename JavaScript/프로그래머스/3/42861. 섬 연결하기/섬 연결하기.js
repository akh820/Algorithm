function solution(n, costs) {
    costs.sort((a,b) => a[2] - b[2]);
    
    const rootNodes = Array.from({length : n}, (_,i) => i);
    
    //[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
    // 3의 부모 2
    // 2의 부모 1
    // 1의 부모 0
    const findRootNode = (i) => {
        if(rootNodes[i] === i) {
            return i;
        }
        return rootNodes[i] = findRootNode(rootNodes[i]);
    }
    
    const unionRoots = (a,b) => {
        const rootA = findRootNode(a); // 0
        const rootB = findRootNode(b); // 1
        
        if(rootA !== rootB){
            rootNodes[rootB] = rootA;
            return true;
        }
        return false;
    }
    let minCost = 0;
    for(const [a, b, cost] of costs){
        if(unionRoots(a,b)){
            minCost += cost;
        }
    }
    return minCost;
}