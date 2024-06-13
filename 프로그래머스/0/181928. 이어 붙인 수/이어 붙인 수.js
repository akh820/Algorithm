function solution(num_list) {
    let answer = 0;
    let a = '';
    let b = '';
    for(let i = 0 ; i < num_list.length ; i++){
        if( num_list[i] % 2 != 0){
            a += num_list[i];
        } else {
            b += num_list[i];
        }
    }
    answer = parseInt(a) + parseInt(b)
    return answer;
}