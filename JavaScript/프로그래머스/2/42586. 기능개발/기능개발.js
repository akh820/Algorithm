function solution (progresses, speeds) {
    let count = 0;
    let n = 0;
    const answer = [];
    
    while(n < progresses.length){
        if(progresses[n] >= 100){
            count++;
            n++;
            if(n === progresses.length) answer.push(count);
        } else {
            if(count !== 0) {
                answer.push(count);
                count = 0;
            }
            for(let i = 0; i < progresses.length; i++){
                progresses[i] += speeds[i];
            }
        }
    }
    return answer;
}