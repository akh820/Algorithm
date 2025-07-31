function solution(scoville, K) {
    const heap = new MinHeap();
    for(const e of scoville){
        heap.insert(e);
    }
    let count = 0;
    while(heap.getMin() < K){
        const min = heap.extractMin();
        const min2 = heap.extractMin();
        const result = min + (min2 * 2);
        if(result < K && min2 === null) return -1;
        heap.insert(result);
        count++;
    }
    return count;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        this.siftUp();
    }
    siftUp(){
        let currentIndex = this.heap.length-1;
        while(currentIndex > 0){
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if(this.heap[parentIndex] <= this.heap[currentIndex]) break;
            [this.heap[currentIndex], this.heap[parentIndex]] = 
                [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }
    extractMin() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    }
    siftDown(index){
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
        const heapSize = this.heap.length;
        if(leftChildIndex < heapSize && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }
        if(rightChildIndex < heapSize && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }
        if(smallestIndex !== index){
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            this.siftDown(smallestIndex);
        }
    }
    getMin(){
        return this.heap[0];
    }
}