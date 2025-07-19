function solution(participant, completion) {
    const answer = {};
    
    for(const e of participant){
        if(!answer.hasOwnProperty(e)){
            answer[e] = 1;
        } else {
            answer[e]++;
        }
    }
    
    for(const e of completion){
        if(answer.hasOwnProperty(e)){
            answer[e]--;
        }
    }
    
    for(const [k,v] of Object.entries(answer)){
        if(v !== 0) return k;
    }
    
    return answer;
}