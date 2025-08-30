function solution(info, query) {
    const result = [];
    const infoMap = new Map();
    const arrangedQuery = [];
    for(let i = 0 ; i < info.length; i++){
        const infoArray = info[i].split(" ");
        // console.log(infoArray, "infoArray");
        const value = infoArray.slice(infoArray.length - 1, infoArray.length);
        infoArray.splice(infoArray.length - 1, 1);
        const key = infoArray.join(" ");
        // console.log(infoArray, value);
        let valueList = [];
        if(infoMap.get(infoArray)){
            valueList = infoMap.get(infoArray);
        }
        valueList.push(Number(value));
        infoMap.set(key, valueList);
    }
    for(const e of query){
        const queryArray = e.split(" and ");
        const remaining = queryArray[queryArray.length - 1].split(" ");
        queryArray.splice(queryArray.length - 1, 1);
        arrangedQuery.push([...queryArray, ...remaining]);
    }
    for(const e of arrangedQuery){
        let count = 0;
        const score = Number(e.splice(e.length - 1, 1).pop());
        const key = e.join(" ");
        if(infoMap.has(key)){
            const scoreList = infoMap.get(key);
            for(const sco of scoreList){
                if(sco >= score) count ++;
            }
        }
        result.push(count);
    }
    
    // for(const [k,v] of infoMap.entries()){
    //     console.log(k,v);
    // }
    // console.log(arrangedQuery);
    return result;
}