function solution(n_str) {
    var answer = '';
    let len = n_str.length;
    for(let i = 0; i < len; i++){
        if(n_str[i] !== '0'){
            for(let j = i; j < len; j++){
                answer += n_str[j];
            }
            break;
        }
    }
    return answer;
}