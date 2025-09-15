function solution(n) {
    const prime = new Array(n+1).fill(false);
    
    //0, 1은 소수가 아님
    for(let i = 2; i < prime.length; i++){
        prime[i] = true;
    }
    
    for(let i = 2; i * i <= n ; i++){
        if(prime[i]){
            for(let j = i*i ; j <= n ; j += i){
                prime[j] = false;
            }
        }
    }
    let count = 0;
    for(const number of prime){
        if(number === true){
            count++;
        }
    }
    
    return count;
}

