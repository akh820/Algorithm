function solution(cacheSize, cities) {
    
    if(cacheSize === 0) return cities.length * 5;
    
    const map = new Map();
    
    let time = 0;
    
    for(const e of cities){
        const city = e.toUpperCase();
        if(map.has(city)){
            map.delete(city);
            map.set(city, true);
            time += 1;
        } else {
            if(map.size >= cacheSize){
                map.delete(map.keys().next().value); // 처음 들어온 값
            } 
            map.set(city);
            time += 5;
        }
    }
    return time;
}