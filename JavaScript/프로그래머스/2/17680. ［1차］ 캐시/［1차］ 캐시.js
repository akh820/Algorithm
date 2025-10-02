function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    const cityMap = new Map();
    
    let time = 0;
    
    for(const e of cities){
        const city = e.toUpperCase();
        const oldestCity = cityMap.keys().next().value;
        if(cityMap.has(city)){
            time += 1;
            cityMap.delete(city);
            cityMap.set(city, true);
        } else {
            time += 5;
            if(cityMap.size >= cacheSize){
                cityMap.delete(oldestCity);
            }
            cityMap.set(city, true);
        }
    }
    
    return time;
}