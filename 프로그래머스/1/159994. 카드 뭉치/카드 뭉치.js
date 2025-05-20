class Queue{
    constructor(initial = []){
        this.items = Array.isArray(initial) ? [...initial] : [];
        this.front = 0;
        this.rear = this.items.length;
    }
    
    enqueue(item){
        this.items.push(item);
        this.rear++;
    }
    
    dequeue(){
        const value = this.items[this.front];
        delete this.items[this.front++];
        return value;
    }
    
    size(){
        return this.rear - this.front;
    }
    
    peek(){
        return this.items[this.front];
    }
    
    isEmpty(){
        return this.size() === 0 ? true : false;
    }
}

function solution(cards1, cards2, goal) {
    const card1Q = new Queue(cards1);
    const card2Q = new Queue(cards2);
    const goalQ = new Queue(goal);
    
    while(goalQ.size() > 0){
        if(!card1Q.isEmpty() && card1Q.peek() === goalQ.peek()){
            card1Q.dequeue();
            goalQ.dequeue();
        }else if(!card2Q.isEmpty() && card2Q.peek() === goalQ.peek()){
            card2Q.dequeue();
            goalQ.dequeue();
        } else {
            break;
        }
    }
    
    return goalQ.isEmpty() ? "Yes" : "No";
}

