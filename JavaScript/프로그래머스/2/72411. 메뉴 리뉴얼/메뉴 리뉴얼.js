function getCombinations(order, combination, start, courseMap) {
    if (combination.length > 1) {
        courseMap.set(combination, (courseMap.get(combination) || 0) + 1);
    }
    
    for (let i = start; i < order.length; i++) {
        getCombinations(order, combination + order[i], i + 1, courseMap);
    }
}

function solution(orders, course) {
    const courseMap = new Map(); 
    
    orders.forEach(order => {
        const sortedOrder = order.split('').sort().join('');
        getCombinations(sortedOrder, "", 0, courseMap);
    });

    const result = [];
    
    for (const c of course) {
        let maxCount = 2; 
        let tempResult = [];
        
        for (const [combination, count] of courseMap.entries()) {
            if (combination.length === c) {
                if (count > maxCount) {
                    maxCount = count;
                    tempResult = [combination];
                } else if (count === maxCount) {
                    tempResult.push(combination);
                }
            }
        }
        result.push(...tempResult);
    }

    return result.sort();
}