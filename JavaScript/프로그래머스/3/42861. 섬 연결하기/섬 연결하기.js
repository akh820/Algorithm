function solution(n, costs) {
    const rootNodeList = Array.from({length:n}, (_,i)=>i);
    
    costs.sort((a,b) => a[2] - b[2]);
    
    let cost = 0;
    
    for(const [a, b, distance] of costs){
        console.log(rootNodeList, "Before");
        if(unionRoot(a,b)){
            cost += distance;
        }
        console.log(rootNodeList, "After");
    }
    
    function unionRoot(a, b){
        const rootA = findRootNode(a);
        const rootB = findRootNode(b);
        if(rootA !== rootB){
            rootNodeList[rootB] = rootA;
            return true;
        }
    }
    function findRootNode(e){
        if(rootNodeList[e] === e){
            return e;
        }
        return rootNodeList[e] = findRootNode(rootNodeList[e]);
    }

    return cost;
}
