function solution(orders, course) {
    const map = new Map();
    let minimum = 0;
    const result = [];
    
    for(const c of course){
        
        for(const order of orders){
            createCombination(order,"",0,c);
        }
    }
    
    function createCombination(string, prefix, start, limit){
        if(prefix.length > limit) return;
        if(prefix.length === limit){
            const value = map.get(prefix) || 0;
            map.set(prefix, value + 1);
        }
        
        for(let i = start ; i < string.length; i++){
            const newPrefix = prefix + string[i]; // A, AB
            const remaining = [...string];
            remaining.splice(i,1); //BCDE, CDE, 
            createCombination(remaining, newPrefix.split("").sort().join(""), start++, limit);
        }
    }
    // for(const [k,v] of map.entries()){
    //     console.log(k, v);
    // }
    for(const c of course) {
        //c가 2
        let maximum = 2;
        let temp = [];
        for(const [k,v] of map.entries()){
            if(k.length !== c) continue; // 2,3,4인것만 측정
            if(v > maximum){ // value값이 2보다 높으면 temp 다 버림
                maximum = v;
                temp = [];
                temp.push(k);
            } else if (v === maximum){
                temp.push(k);
            }
        }
        result.push(...temp);
    }
    
    return result.sort();
}