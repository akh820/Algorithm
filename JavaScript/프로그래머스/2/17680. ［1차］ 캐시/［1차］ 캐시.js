function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    let time = 0;
    const cache = new Map();
    cities.map((e) => {
        const city = e.toUpperCase();
        if(cache.size < cacheSize){ // cache.size가 주어진 크기보다 작을때
            if(cache.has(city)){
                cache.delete(city);
                cache.set(city, true);
                time += 1;
            } else {
                cache.set(city, true);
                time += 5;
            }
        } else {
            if(cache.has(city)){
                cache.delete(city);
                cache.set(city, true);
                time += 1;
            } else {
                const key = cache.keys().next().value;
                cache.delete(key);
                cache.set(city, true);
                time += 5;
            }
        }
    })
    return time;
}

