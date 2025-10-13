function solution(n, times) {
    let nBigInt = BigInt(n);
    
    let left = 1n;
    let right = nBigInt * BigInt(Math.max(...times));
    
    let answer = right;
    
    while(left <= right){
        const mid = (left + right) / 2n;
        
        let count = 0n;
        for(const time of times){
            count += mid / BigInt(time);
        }
        
        if(count >= n){
            answer = mid;
            right = mid -1n;
        } else {
            left = mid +1n;
        }
    }
    return BigInt(answer);
}