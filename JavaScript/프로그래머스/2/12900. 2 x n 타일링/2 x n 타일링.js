function solution(n) {
    let first = 0;
    let second = 1;
    let now;
    if(n <= 1) return n;
    for(let i = 0; i < n ; i++){ // n이 2일때
        now = (first + second) % 1000000007; // now = 1,2,3,5
        first = second; // first = 1,1,2,3
        second = now; // second = 1,2,3,5
    }
    return now ;
}