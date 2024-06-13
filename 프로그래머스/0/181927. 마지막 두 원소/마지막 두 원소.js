function solution(num_list) {
    let answer = [...num_list]; // num_list의 복사본을 생성하여 answer에 할당합니다.
    const a = num_list.length;  // 'legnth'가 아니라 'length'로 수정합니다.
    
    if(num_list[a - 1] > num_list[a - 2]) {
        answer.push(num_list[a - 1] - num_list[a - 2]);  // 올바른 논리로 수정합니다.
    } else {
        answer.push(num_list[a - 1] * 2);
    }
    
    return answer;
}