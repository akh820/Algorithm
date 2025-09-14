function solution(begin, target, words) {
    
    if(!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    const visited = Array(words.length).fill(false);
    while(queue.length > 0){
        const [currentWord, count] = queue.shift();
        
        if(currentWord === target){
            return count;
        }
        
        words.forEach((word,index) => {
            if(visited[index] === false && differentOne(currentWord, word)){
                visited[index] = true;
                queue.push([word, count + 1]);
            }
        })
    }
    
    return 0;
}

function differentOne(wordA, wordB){
    let count = wordA.length;
    for(let i = 0 ; i < wordA.length; i++){
            if(wordA[i] !== wordB[i]){
                count--;
            }
            if(count < wordA.length - 1) return false;
        }
    return true;
}