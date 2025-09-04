function solution(s) {
    
    let min = s.length;
    for(let i = 1; i < s.length; i++){
        const map = new Map();
        let start = 0;
        let end = i;
        let string = "";
        while(true){
            if(end > s.length){
                const [key, value] = map.entries().next().value;
                if(value <= 1){
                        string += key;
                    } else {
                        string += `${value}${key}`;
                    }
                string += s.slice(start, s.length);
                break;
            }
            const repeat = s.slice(start, end);
            
            if(map.size > 0){
                const [key, value] = map.entries().next().value; // 0이 key, 1이 value
                
                if(repeat !== key){
                    if(value <= 1){
                        string += key;
                    } else {
                        string += `${value}${key}`;
                    }
                    map.delete(key);
                    map.set(repeat, 1);
                } else {
                    map.set(repeat, map.get(repeat) + 1)
                }
            } else {
                map.set(repeat, 1)
            }
            start += i;
            end += i;
        }
        min = Math.min(min, string.length);
    }
    
    return min
}
