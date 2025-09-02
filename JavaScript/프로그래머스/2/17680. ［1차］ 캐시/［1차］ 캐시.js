function solution(cacheSize, cities) {
    let count = 0;
    const cacheMap = new Map();
    cities.forEach((e,i) => {
        if(cacheSize === 0){
            count += 5;
        } else {
            const city = e.toLowerCase();
            if(cacheMap.size < cacheSize){
                if(cacheMap.has(city)){
                    count += 1;
                } else {
                    count += 5;
                }
                cacheMap.set(city, 0);
            } else {
                if(cacheMap.has(city)){ // 기존꺼를 0으로
                    count += 1;
                } else { // 기존에 가장 시간이 오래 경과된놈을 지움
                    const key = findOldestCity();
                    cacheMap.delete(key);
                    count += 5;
                }
                cacheMap.set(city, 0);
            }
            cacheMap.forEach((value, key) => {
                cacheMap.set(key, value+1);
            })
        }
    })
    
    function findOldestCity(){
        let oldest = 0;
        let key;
        for(const [k, v] of cacheMap.entries()){
            if(v > oldest){
                key = k
                oldest = v
            }
        }
        
        return key
    }

    return count;
}

