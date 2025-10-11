function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    const cacheMap = new Map();
    let time = 0;
    for(const e of cities){
        const city = e.toUpperCase();
        if(cacheMap.has(city)){
            time++;
            cacheMap.delete(city);
            cacheMap.set(city, true);
        } else {
            time += 5;
            if(cacheMap.size >= cacheSize){
                cacheMap.delete(cacheMap.keys().next().value);
            }
        }
        cacheMap.set(city, true);
    }
    return time;
}