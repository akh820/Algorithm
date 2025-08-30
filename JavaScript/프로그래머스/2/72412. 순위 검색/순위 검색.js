function solution(info, query){
    const infoMap = new Map();
    const result = [];
    for(const e of info){
        const temp = e.split(" ");
        const value = Number(temp.pop());
        addMinus(temp, value, 0);
    }
    
    function addMinus(remainList, value, start){
        
        const key = remainList.join(" ");
        
        if(infoMap.has(key)){
            infoMap.get(key).push(value);
        } else {
            infoMap.set(key, [value]);
        }
        
        for(let i = start; i < remainList.length; i++){
            const tempList = [...remainList];
            tempList[i] = "-";
            addMinus(tempList, value, i + 1);
        }
    }
    for(const v of infoMap.values()){
        v.sort((a,b) => a - b);
    }
    // for(const [k, v] of infoMap.entries()){
    //     console.log(k, v);
    // }
    query.forEach(e => {
        const temp = e.replace(/ and /g," ").split(" ");
        const value = Number(temp.pop());
        const key = temp.join(" ");
        // console.log(temp);
        if(infoMap.has(key)){
            const valueList = infoMap.get(key);
            let left = 0;
            let right = valueList.length;
            while(left < right){
                const mid = Math.floor((left + right) / 2);
                if(valueList[mid] >= value){
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            result.push(valueList.length - left);
        } else {
            result.push(0);
        }
    })
    
    return result
}