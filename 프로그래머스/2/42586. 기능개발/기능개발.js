class Queue {
    constructor(initial = []) {
        this.items = Array.isArray(initial) ? [...initial] : [];
        this.front = 0;
        this.rear = this.items.length; 
    }

    enqueue(item) {
        this.items.push(item);
        this.rear++;
    }

    dequeue() {
        const value = this.items[this.front];
        delete this.items[this.front++];
        return value;
    }
    
    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}
            
function solution(progresses, speeds) {
    const queue = new Queue(progresses);
    let count = 1, tempCount = 0, prevValue = 0;
    const answer = [];
    
    for(let i = 0; i < speeds.length; i++){
        let value = queue.peek() + speeds[i] * count;
        while(value < 100){ 
            count++;    
            value = queue.peek() + speeds[i] * count; 
        }
        queue.dequeue();
        if(prevValue === 0 || count === prevValue){
            tempCount++;
        } else {
            answer.push(tempCount);
            tempCount = 1;
        }
        prevValue = count;
    }
    answer.push(tempCount);
    return answer;
}