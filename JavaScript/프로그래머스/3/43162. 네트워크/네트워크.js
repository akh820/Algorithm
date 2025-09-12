function solution(n, computers) {
    const set = new Set();
    computers.forEach((computer,i) => {
        const visited = new Array(n).fill(false);
        set.add(check(computer, i, visited).join(""));
    })
    
    function check(arr, i, visited){ // arr 가 [1,1,0] 이라고 가정
        for(let j = 0 ; j < arr.length; j++){
            if(j === i){ // 같으면 무조건 1
                visited[j] = true;
            }
            if(arr[j] === 1 && visited[j] === false){
                visited[j] = true;
                check(computers[j],i,visited);
            }
        }
        return visited
    }
    
    return set.size;
}