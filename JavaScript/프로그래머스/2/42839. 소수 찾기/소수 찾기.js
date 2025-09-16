function solution(numbers) {
    const set = new Set();
    let count = 0;
    
    newCombination(numbers.split(""), "");
    
    function newCombination(arr, prefix){
        if(prefix.length > 0){ 
            set.add(Number(prefix)); // set = 1
        }
        
        for(let i = 0 ; i < arr.length; i++){ // [1,7] 에서 0시작
                                              // [7] 에서 0시작
            const newPrefix = arr[i] + prefix; // 1 + "" // 7 + "1"
            const remaining = [...arr]; // [1,7]; // 7
            remaining.splice(i,1); // [7] // 0
            newCombination(remaining, newPrefix); // [7], "71";
        }
    }
    
    for(const e of set){
        if(isPrime(e)){
            count++;
        }
    }
    
    return count;
}


function isPrime(number){
    if(number < 2) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}