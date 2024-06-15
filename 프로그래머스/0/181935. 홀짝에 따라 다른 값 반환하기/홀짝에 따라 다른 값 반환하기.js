function solution(n) {
    let a = 0;
    let b = 0
    for(let i = 1; i <= n; i++){
        if( i % 2 != 0){
            a += i;
        } else {
            b += i*i;
        }
    }
    
    if(n % 2 ==0){
        return b
    } else {
        return a
    }
}