class Queue{
    constructor(){
        this.storage = {};
        this.rear = 0;
        this.front = 0;
    }
    
    enqueue(val){
        this.storage[this.rear++] = val;
    }
    
    dequeue(){
        if (this.size() === 0) return "큐가 비어있음";
        const val = this.storage[this.front];
        delete this.storage[this.front++];
        return val
    }
    
    size(){
        return this.rear - this.front;
    }
}

function solution(record) {
    const answer = [];
    const nameObj = {};
    const queue = new Queue();
    
    for(const r of record){
        const infos = r.split(" ");
        if(!nameObj[infos[1]]){
            nameObj[infos[1]] = infos[2];
            queue.enqueue([infos[0], infos[1]]);
        } else {
            switch (infos[0]) {
                case "Enter":
                    if (nameObj[infos[1]] !== infos[2]) {
                        nameObj[infos[1]] = infos[2];
                    }
                    queue.enqueue([infos[0], infos[1]]);
                    break;
                case "Leave":
                    queue.enqueue([infos[0], infos[1]]);
                    break;
                case "Change":
                    nameObj[infos[1]] = infos[2];
                    break;
            }
        }
    }
    // console.log(queue);
    // console.log(nameObj);
    const n = queue.size();
    for(let i = 0 ; i < n; i++){
        const value = queue.dequeue();
        if(value[0] === "Enter"){
            answer.push(`${nameObj[value[1]]}님이 들어왔습니다.`);
        } else if (value[0] === "Leave"){
            answer.push(`${nameObj[value[1]]}님이 나갔습니다.`);
        }
    }
    return answer;
}