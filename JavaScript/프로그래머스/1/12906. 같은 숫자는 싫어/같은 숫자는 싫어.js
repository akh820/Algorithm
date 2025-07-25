function solution(arr){
    let prevNum = -1;
    const answer = [];
    for(const n of arr){
        if(prevNum === -1){
            answer.push(n);
            prevNum = n;
        } else if(prevNum !== n){
            answer.push(n);
            prevNum = n;
        }
    }
    return answer;
}