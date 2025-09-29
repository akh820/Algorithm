function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let time = 0;
    
    const map = new Map();
    
    //LRU 알고리즘 => 가장 최근에 사용한거를 기준
    
    for(const cityName of cities){
        const city = cityName.toUpperCase();
        
        if(map.has(city)){
            time++;
            map.delete(city);
            map.set(city, true);
        } else {
            time += 5;
            if(map.size >= cacheSize){
                map.delete(map.keys().next().value);
            }
            map.set(city, true);
        }
            
    }
    
    return time;
}