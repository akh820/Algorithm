function solution(numbers, target) {
    
    let count = 0;
    
    dfs(0, numbers[0]);
    dfs(0, -numbers[0]);

    function dfs(index, currentSum){
        if(index === numbers.length-1 && currentSum === target){
            count++;
        }
        const currentIndex = index + 1;
        if(currentIndex > numbers.length) return;
        dfs(currentIndex, currentSum + numbers[currentIndex]);
        dfs(currentIndex, currentSum - numbers[currentIndex]);
    }
    
    return count;
    
}