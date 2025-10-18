function solution(n, build_frame) {
    
    const set = new Set();
    
    for(const [x,y,a,b] of build_frame){
        const order = `${x},${y},${a}`;
        if(b === 1){//설치하는 경우
            set.add(order); // 일단 설치
            if(!isValidate(order)){ // 유효하지 않을 경우 삭제
                set.delete(order)
            }
        } else {
            set.delete(order);
            
            let isDangerous = false;
            for(const e of set){
                if(!isValidate(e)){
                    isDangerous = true;
                    break;
                } 
            }
            if(isDangerous){
                set.add(order);
            }
        }
    }
    
    const list = Array.from(set).map(e=>e.split(",").map(Number));

    return list.sort((a,b) => {
        if(a[0] !== b[0]) return a[0] - b[0];
        if(a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2]
    })
    
    function isValidate(order) {
        const [x,y,a] = order.split(",").map(Number);
        if(a === 0){ // 기둥일시
            if(y === 0) return true;
            if(set.has(`${x},${y-1},${0}`)) return true;
            if(set.has(`${x-1},${y},${1}`) || set.has(`${x},${y},${1}`)) return true;
            return false;
        } else { // 보 일시
            if(set.has(`${x},${y-1},${0}`) || set.has(`${x+1},${y-1},${0}`)) return true;
            if(set.has(`${x-1},${y},${1}`) && set.has(`${x+1},${y},${1}`)) return true;
            return false;
        }
    }
}
