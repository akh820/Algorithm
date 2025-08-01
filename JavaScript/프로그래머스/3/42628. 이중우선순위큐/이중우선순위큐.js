function solution(operations) {
    const queue = [];
    for(const e of operations){
        switch(e) {
            case "D 1":
                if(queue.length !== 0){
                    queue.pop();
                }
                break;
                
            case "D -1":
                if(queue.length !== 0){
                    queue.shift();
                }
                break;
    
            default:
                const num = Number(e.substring(2));
                queue.push(num);
                queue.sort((a,b) => a - b);
        }
    }
    return queue.length === 0 ? [0,0] : [queue[queue.length-1], queue[0]];
    
}