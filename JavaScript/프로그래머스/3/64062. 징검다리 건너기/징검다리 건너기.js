function solution(stones, k) {
    
    let left = 1;
    let right = 200000000;
    
    let answer = 0; // 그냥 초깃값
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        
        let zeroCount = 0;
        let canCross = true;
        for(const stone of stones){
            if(stone - mid < 0){
                zeroCount++;
            } else {
                zeroCount = 0;
            }
            if(zeroCount === k){
                canCross = false;
                break;
            }
        }
        
        
        if(canCross){
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return answer
}