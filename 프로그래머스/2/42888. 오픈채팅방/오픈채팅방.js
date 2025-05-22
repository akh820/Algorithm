function solution(record){
    const answer = [];
    const uid = {};
    
    for(const line of record){
        const div = line.split(" ");
        //1: 명령어, 2:id, 3:닉네임
        if(div[0] != "Leave"){
            uid[div[1]] = div[2];
        }
    }
    
    for(const line of record){
        const div = line.split(" ");
        if(div[0] === "Enter"){
            answer.push(`${uid[div[1]]}님이 들어왔습니다.`);
        } else if(div[0] === "Leave"){
            answer.push(`${uid[div[1]]}님이 나갔습니다.`);
        }
    }
    
    return answer;
}