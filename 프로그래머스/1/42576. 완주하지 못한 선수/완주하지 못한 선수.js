function solution(participant, completion) {
    
    const answer = {};
    
    for(const p of participant){
        if(answer[p]){
            answer[p] += 1;
        } else {
            answer[p] = 1;
        }
    }
    
    for(const c of completion){
        if(answer[c]){
            answer[c] -= 1;
        }
    }
    
    for(const key in answer){
        if(answer[key] > 0){
            return key;
        }
    }
}