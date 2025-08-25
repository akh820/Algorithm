function solution(operations){
    const minHeap = new MinHeap();
    const maxHeap = new MinHeap();
    const map = new Map();
    
    for(const e of operations){
        const [command, value] = e.split(' ');
        const num = Number(value);
        
        if(command === "I"){
            minHeap.insert(num);
            maxHeap.insert(num * -1);
            map.set(num, (map.get(num) || 0) + 1);
        } else if (command === "D"){
            if(num === 1){ //1 최대값 삭제, -1 최소값 삭제
                while( maxHeap.size() > 0 && map.get(maxHeap.peek() * -1) === 0){
                    maxHeap.pop();
                }
                if(maxHeap.size() > 0){
                const maxValue = maxHeap.pop() * -1;
                map.set(maxValue, map.get(maxValue) - 1);
                }
            } else { //-1인경우
                while( minHeap.size() > 0 && map.get(minHeap.peek()) === 0){
                    minHeap.pop();
                }
                if(minHeap.size() > 0){
                    const minValue = minHeap.pop();
                    map.set(minValue, map.get(minValue) - 1);
                }
            }
        }
        while(maxHeap.size() > 0 && map.get(maxHeap.peek() * -1) === 0){
            maxHeap.pop();
        }
        while( minHeap.size() > 0 && map.get(minHeap.peek()) === 0){
            minHeap.pop();
        }
    }
    if(minHeap.size() === 0 || maxHeap.size() === 0){
        return [0,0];
    } else {
        return [maxHeap.peek() * -1, minHeap.peek()];
    }
}

class MinHeap {
    constructor(){
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        this.siftUp();
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.size() === 0 ? null : this.heap[0];
    }
    siftUp(){
        let currentIndex = this.size() - 1;
        while(currentIndex > 0){
            let parentIndex = Math.floor( (currentIndex - 1) / 2);
            if(this.heap[currentIndex] >= this.heap[parentIndex]) break;
            [this.heap[currentIndex],this.heap[parentIndex]] = 
                [this.heap[parentIndex],this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }
    pop(){
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
        
    }
    siftDown(value){
        let leftChildIndex = 2 * value + 1;
        let rightChildIndex = 2 * value + 2;
        let smallestIndex = value;
        const heapSize = this.size();
        if(leftChildIndex < heapSize && this.heap[leftChildIndex] < this.heap[smallestIndex]){
            smallestIndex = leftChildIndex;
        }
        if(rightChildIndex < heapSize && this.heap[rightChildIndex] < this.heap[smallestIndex]){
            smallestIndex = rightChildIndex;
        }
        if(smallestIndex !== value){
            [this.heap[value],this.heap[smallestIndex]] = 
                [this.heap[smallestIndex],this.heap[value]];
            this.siftDown(smallestIndex);
        }
    }
}