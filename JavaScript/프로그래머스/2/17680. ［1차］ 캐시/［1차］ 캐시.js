function solution(cacheSize, cities) {
    if(cacheSize === 0){
        return cities.length * 5;
    }
    
    let count = 0;
    const cache = new Map();
    
    for(const city of cities){
        const cityLower = city.toLowerCase();
        if(cache.has(cityLower)){
            count += 1;
            cache.delete(cityLower);
            cache.set(cityLower, true); // value는 상관없음
        } else {
            count += 5;
            if(cache.size >= cacheSize){
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            cache.set(cityLower, true);
        }
    }

    return count;
}

