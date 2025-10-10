function solution(n) {
    if(n <= 2){
        return n;
    } else {
        let a = 1;
        let b = 2;
        let c;
        for(let i = 3; i <= n ; i++){
            c = (a + b) % 1000000007;
            a = b;
            b = c;
        }
        return c;
    }
}