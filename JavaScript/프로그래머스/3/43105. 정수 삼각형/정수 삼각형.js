function solution(triangle) {
    for(let i = 1; i < triangle.length; i++){
        for(let j = 0; j < triangle[i].length; j++){
            if(j === 0){ // 맨 왼쪽이면
                triangle[i][j] += triangle[i-1][j];
            } else if ( j === triangle[i].length - 1) { // 맨 오른쪽이면
                triangle[i][j] += triangle[i-1][triangle[i-1].length - 1];
            } else { // 둘다아니면
                triangle[i][j] += Math.max(triangle[i-1][j] , triangle[i-1][j-1]);
            }
        }
    }
    // for(const e of triangle){
    //     console.log(e);
    //     console.log("-------------");
    // }
    let max = 0;
    for(const e of triangle[triangle.length-1]){
        if( e > max ) max = e;
    }
    return max;
}