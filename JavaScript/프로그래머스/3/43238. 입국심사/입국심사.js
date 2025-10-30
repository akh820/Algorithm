function solution(n, times) {
    
    const N = BigInt(n);
    
    let left = 1n; // 입국의 최소 시간
    let right = N * 1000000000n;
    
    let answer = right;
    
    while(left <= right){
        let count = 0n;
        const mid = (left + right) / 2n;
        for(const e of times){
            count += (mid / BigInt(e));
        }
        if(count >= N){ // 더 줄일 수 있나 확인
            // console.log(count, n);
            answer = mid;
            right = mid - 1n;
        } else {
            left = mid + 1n;
        }
    }
    
    return answer;
}