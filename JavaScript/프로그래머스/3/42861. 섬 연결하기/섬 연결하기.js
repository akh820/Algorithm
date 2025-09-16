function solution(n, costs) {
    const rootNodes = Array.from({length : n}, (_,i) => i);
    let minCost = 0;
    
    costs.sort((a,b) => a[2] - b[2]);
    
    for(const [a,b, cost] of costs){
        if(unionRoots(a,b)){
            minCost += cost;
        }
    }
    
    function findRootNode(e){
        if(rootNodes[e] === e){
            return e;
        }
        return rootNodes[e] = findRootNode(rootNodes[e]);
        
    }
    
    function unionRoots(a, b){
        const rootA = findRootNode(a);
        const rootB = findRootNode(b);

        if(rootA !== rootB){
            rootNodes[rootB] = rootA;
            return true;
        }

        return false;
    }
    
    return minCost;
}

