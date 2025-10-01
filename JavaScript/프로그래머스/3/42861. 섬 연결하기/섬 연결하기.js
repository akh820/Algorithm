function solution(n, costs) {
    
    const rootNodeList = Array.from({length : n}, (_,i) => i);
    
    costs.sort((a,b) => a[2] - b[2]);
    
    let min = 0;
    
    for(const [a, b, cost] of costs){
        if(connectRoots(a,b)){
            min += cost;
        }
    }    
    
    function connectRoots(a,b){
        const rootA = findRootNode(a);
        const rootB = findRootNode(b);
        
        if(!(rootA === rootB)){
            rootNodeList[rootB] = rootA;
            return true;
        }
        return false;
    }
    
    function findRootNode (e) {
        if(rootNodeList[e] === e) return e;
        return rootNodeList[e] = findRootNode(rootNodeList[e]);
    }
    
    return min;
}