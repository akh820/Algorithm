function solution(n, times) {
    const nBigInt = BigInt(n); // big
    
    let left = 1n; //기다리는사람 최소1, 걸리는 시간 1분
    let right = nBigInt * BigInt(Math.max(...times)); // n * 최대시간 '
    
    let answer = right; // 최악의 경우를 가정
    
    while(left <= right){
        let count = 0n;
        const mid = (left + right) / 2n;
        
        for(const time of times){
            count += mid / BigInt(time);
        }
        
        if(count >= nBigInt){ // n 보다 크거나 같은 경우 더 줄일 수 있다고 생각해서 오른쪽 범위를 줄임
            answer = mid;
            right = mid - 1n;
        } else {
            left = mid + 1n;
        }
    }
    
    return BigInt(answer);
}