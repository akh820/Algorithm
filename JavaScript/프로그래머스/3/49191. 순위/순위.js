function solution(n, results) {
    const player = Array.from({length:n + 1}, () => Array(n+1).fill(false));
    
    for(const [winner, loser] of results){
        player[winner][loser] = true;
    }
    
    for(let i = 1 ; i <= n; i++){
        for(let j = 1; j <=n; j++){
            for(let k = 1; k <=n; k++){ //i는 1 k는 2, j = 5라고 가정
                if(player[j][i] && player[i][k]){
                    player[j][k] = true;
                }
            }
        }
    }
    let answer = 0;
    for(let i = 1; i <= n; i++){
    let count = 0;
        for(let j = 1; j <= n ; j++){
            if(player[i][j] || player[j][i]){
                count++;
            }
        }
        if(count === n - 1){
            answer++;
        }
    }
    return answer;
}