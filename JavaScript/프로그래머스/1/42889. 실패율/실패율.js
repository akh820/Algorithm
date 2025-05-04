function solution(N, stages) {
    const answer = new Array(N).fill(0);
    let p = stages.length;
    for(let i = 0 ; i < N ; i++){
        let count = 0;
        stages.filter( e => {
            // i+1 은 스테이지 넘버
            if(e === (i+1)) count++;
            answer[i] = {
                failure : count / p,
                index : i+1
            }
            ;
        })
        p -= count;
    }
    let max = Math.max(...answer);
    const realAnswer = answer.sort((a, b) => b.failure - a.failure)
    .map(obj => obj.index);
    // const realAnswer = answer.map(obj => obj.index);
    
    return realAnswer;
}