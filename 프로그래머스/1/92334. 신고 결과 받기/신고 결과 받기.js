function solution(id_list, report, k) {
    const idObj = {};
    const reportObj = {};
    const answer = [];
    for(const id of id_list){
        idObj[id] = new Set();
        reportObj[id] = 0;
    }
    
    for(const r of report){
        const info = r.split(" ");
        if(!idObj[info[0]].has(info[1])){
            idObj[info[0]].add(info[1]);
            reportObj[info[1]] += 1;
        }
    }
    
    const reportedPerson = Object.keys(reportObj).filter( e => {
        return reportObj[e] >= k;
    });
    
    for(const id of id_list){
            let count = 0;
            for(let i = 0; i < reportedPerson.length; i++){
                if(idObj[id].has(reportedPerson[i])) count++;
            }
            answer.push(count);
    }
    
    return answer;
    
    return answer;
}