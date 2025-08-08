function solution(array, commands) {
    const answer = [];
    for(const e of commands){
        const [i,j,k] = e;
        answer.push(array.slice(e[0]-1,e[1]).sort((a,b) => a-b)[e[2]-1]);
    }
    return answer;
}