function solution(arr1, arr2) {
    
    // 4x2, 2x2 로 한다고 가정 = 4x2, r1xc2 배열 생성될거임
    
    const r1 = arr1.length;  // 4
    const c1 = arr1[0].length; // 2
    
    const r2 = arr2.length; // 2
    const c2 = arr2[0].length; // 2 
    
    const answer = [];
    
    for (let i = 0; i < r1 ; i++){
        answer.push(new Array(c2).fill(0)) // 4x2 빈배열 생성
    }
    
    for(let i = 0 ; i < r1; i++){
        for(let j = 0 ; j < c2; j++){
            for(let k = 0 ; k < c1; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        } 
    }
    
    return answer;
}