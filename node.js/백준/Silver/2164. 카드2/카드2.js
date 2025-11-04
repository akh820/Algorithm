const fs = require("fs");
const N = Number(fs.readFileSync('dev/stdin').toString().trim());
/* N 이 6일때
1 2  3 4  5 6  2 4  6 4 
2 3  4 5  6 2  4 6  4
3 4  5 6  2 4  6
4 5  6 2  4
5 6  2 
6
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedQueue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    enqueue(value){
        const node = new Node(value);
        if(this.size === 0){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node; 
        }
        this.size++;
    }
    
    dequeue(){
        if(this.size === 0) return null;
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if(this.size === 0){
            this.tail = null
        }
        return value;
    }
}

const queue = new LinkedQueue();

for(let i = 1; i <= N; i++){
    queue.enqueue(i);
}

while(queue.size > 1){
    queue.dequeue();
    queue.enqueue(queue.dequeue());
}
console.log(queue.dequeue());
