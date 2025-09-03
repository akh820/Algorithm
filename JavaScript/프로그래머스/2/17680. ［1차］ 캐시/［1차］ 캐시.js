function solution(cacheSize, cities) {
    
    let time = 0;
    
    if(cacheSize === 0){
        return cities.length * 5;
    }
    
    const cache = new Map();
    
    for(const e of cities){
        const city = e.toLowerCase();
        if(cache.has(city)){
            cache.delete(city);
            cache.set(city, true);
            time += 1;
        } else {
            if(cache.size < cacheSize){
                cache.set(city, true);
            } else {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
                cache.set(city, true);
            }
            time += 5;
        }
    }
    
    return time;
}

