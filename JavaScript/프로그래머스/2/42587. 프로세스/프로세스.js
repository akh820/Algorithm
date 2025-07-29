function solution(priorities, location) {
    const queueList = priorities.map((e,i) => {
        return {
            priority: e,
            check: i === location
        };
    })
    
    const sortedPriorities = [...priorities].sort((a,b) => b - a );
    let i = 0;
    let executionCount = 0;
    while(i < sortedPriorities.length){
        if(queueList[0].priority !== sortedPriorities[i]){
            const current = queueList.shift();
            queueList.push(current);
        } else {
            const current = queueList.shift();
            executionCount++;
            i++;
            if(current.check === true) return executionCount;
        }
    }
}