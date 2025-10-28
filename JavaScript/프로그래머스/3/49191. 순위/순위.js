function solution(n, results) {
    const players = Array.from({length:n + 1} , () => Array(n+1).fill(false));
    for(const [winner, loser] of results){
        players[winner][loser] = true;
    }
    
    for(let i = 1; i <= n ; i++){
        for(let j = 1; j <= n ; j++){
            for(let k = 1; k <= n ; k++){
                if(players[j][i] === true && players[i][k] === true){
                    players[j][k] = true;
                }
            }
        }   
    }
    let answer = 0;
    for(let i = 1 ; i <=n ; i++){
        let count = 0;
        for(let j = 1; j <=n ; j++){
            if(players[i][j] || players[j][i]){
                count++;
            }
        }
        if(count === n - 1){
            answer++;
        }
    }
    // for(const e of players){
    //     console.log(e.toString());
    // }
    return answer;
}