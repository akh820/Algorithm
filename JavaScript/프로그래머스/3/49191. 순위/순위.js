function solution(n, results) {
    
    const players = Array.from({length:n+1}, () => Array(n+1).fill(false));
    
    for(const [winner, loser] of results){
        players[winner][loser] = true; // 여기서 true는 순위를 알 수 있음을 뜻함.
    }
    
    for(let i = 0 ; i <= n ; i++){
        for(let j = 0 ; j <= n ; j++){
            for(let k = 0 ; k <= n ; k++){
                if(players[j][i] && players[i][k]){
                    players[j][k] = true;
                }
            }
        }   
    }
    let answer = 0 ;
    
    for(let i = 0 ; i <= n ; i++){
        let count = 0;
        for(let j = 0 ; j <= n ; j++){
            if(players[i][j] || players[j][i]){
                count++;
            }
        }
        if(count === n - 1){
            answer++;
        }
    }
    
    // players.forEach((e,i) => console.log(i,e.toString()));
    
    return answer;
}