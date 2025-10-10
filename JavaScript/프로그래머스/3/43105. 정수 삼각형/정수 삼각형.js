function solution(triangle) {
    for(let i = 1 ; i < triangle.length; i++){
        for(let j = 0 ; j < triangle[i].length; j++){ //i가 1일때 triangle[i]의길이 2, [3,8]
            if(j === 0){
                triangle[i][j] += triangle[i-1][j]; 
            } else if ( j === triangle[i].length - 1){
                triangle[i][j] += triangle[i-1][j-1];
            } else {
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j]);
            }
        }
    }
    let max = 0;
    for(const e of triangle[triangle.length - 1]){
        if(e >= max) max = e;
    }
    return max;
}