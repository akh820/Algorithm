// 모든 조건을 비교하는 MinHeap
class PriorityMinHeap {
    constructor() {
        this.heap = [];
    }

    // 두 작업을 비교하는 헬퍼 메서드
    // a가 우선순위가 높으면 음수, b가 높으면 양수, 같으면 0 반환
    compare(a, b) {
        // 1. 소요시간 비교
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        // 2. 소요시간이 같다면 요청 시각 비교
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        // 3. 모두 같다면 작업 번호 비교
        return a[2] - b[2];
    }
    
    // ... size, insert, pop은 이전과 동일 ...
    size() { return this.heap.length; }
    insert(value) {
        this.heap.push(value);
        this.siftUp();
    }
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return minValue;
    }

    siftUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            // compare 메서드를 사용해 우선순위 비교
            if (this.compare(this.heap[parentIndex], this.heap[currentIndex]) <= 0) break;
            
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    siftDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        const size = this.size();
        let smallestIndex = index;

        // compare 메서드를 사용해 우선순위 비교
        if (leftChildIndex < size && this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
            smallestIndex = leftChildIndex;
        }
        if (rightChildIndex < size && this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]];
            this.siftDown(smallestIndex);
        }
    }
}


function solution(jobs) {
    const count = jobs.length;
    // 작업 번호를 추가: [요청시간, 소요시간, 작업번호]
    const augmentedJobs = jobs.map((job, i) => [...job, i]);
    const priorityQueue = new PriorityMinHeap();
    
    let currentTime = 0;
    let totalResponseTime = 0;
    let jobIndex = 0;
    let completedCount = 0;

    // 요청 시간 기준으로 정렬
    augmentedJobs.sort((a, b) => a[0] - b[0]);

    while (completedCount < count) {
        while (jobIndex < count && augmentedJobs[jobIndex][0] <= currentTime) {
            priorityQueue.insert(augmentedJobs[jobIndex]);
            jobIndex++;
        }

        if (priorityQueue.size() > 0) {
            // 가장 우선순위가 높은 작업을 꺼냄 (3가지 조건 모두 고려됨)
            const [requestTime, timeRequired, jobNumber] = priorityQueue.pop();
            currentTime += timeRequired;
            totalResponseTime += currentTime - requestTime;
            completedCount++;
        } else {
            if (jobIndex < count) {
                currentTime = augmentedJobs[jobIndex][0];
            }
        }
    }

    return Math.floor(totalResponseTime / count);
}