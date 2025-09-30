function solution(triangle) {
    
    for(let i = 1; i < triangle.length; i++){
        for(let j = 0 ; j < triangle[i].length; j++){
            if(j === 0){ // 맨 왼쪽
                triangle[i][j] += triangle[i-1][j]; 
            } else if (j === triangle[i].length - 1) { // 맨 오른쪽
                triangle[i][j] += triangle[i-1][j-1]; 
            } else { // 가운데
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j]);
            }
        }
    }
    let maxValue = 0;
    for(let i = 0 ; i < triangle[triangle.length - 1].length; i++){
        maxValue = Math.max(maxValue, triangle[triangle.length-1][i]);
    }
    
    return maxValue;
}