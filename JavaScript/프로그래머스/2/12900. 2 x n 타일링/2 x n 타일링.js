function solution(n) {
    let a = 1;
    let b = 2;
    if( n === 1 ){
        return 1; 
    }
    if( n === 2){
        return 2;
    }
    
    while(n > 3){
        const result = (a + b) % 1000000007;
        a = b;
        b = result;
        n--;
    }
    
    return (a + b) % 1000000007;
}