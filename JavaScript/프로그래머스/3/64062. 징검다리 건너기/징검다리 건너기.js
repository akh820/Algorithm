function solution(stones, k) {
    
    // stones => 돌배열
    // k = 한번에 건너띌 수 있는 최대 디딤돌 칸 수
    let left = 1;
    let right = 200000000;
    let answer = 0;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        // console.log(mid);
        let continueCount = 0;
        let canCross = true;
        for(const stone of stones){
        // -1,1,2,0,-1,-2,1,-1,2,-2
            if(stone - mid <= 0){
                continueCount++;
            } else {
                continueCount = 0;
            }
            
            if(continueCount === k){
                canCross = false;
                break;
            }
        }
        if(!canCross){
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}