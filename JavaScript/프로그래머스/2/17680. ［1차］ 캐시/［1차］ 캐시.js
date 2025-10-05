function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    const cache = new Map();
    
    let time = 0;
    
    for(const e of cities){
        const city = e.toUpperCase();
        if(cache.has(city)){
            time += 1;
            cache.delete(city);
        } else {
            time += 5;
            if(cache.size >= cacheSize){
                const oldestCache = cache.keys().next().value;
                cache.delete(oldestCache);
            }
        }
        cache.set(city, true);
    }
    
    return time;
}