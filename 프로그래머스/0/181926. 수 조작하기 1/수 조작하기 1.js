function solution(n, control) {
    let answer;
    for(let i = 0; i < control.length; i++){
        if(control[i] === "w"){
            n = n + 1;
        } else if(control[i] === "s"){
            n = n - 1;
        } else if(control[i] === "d"){
            n = n + 10;
        } else if(control[i] === "a"){
            n = n - 10;
        }
    }
    answer = n;
    return answer;
}