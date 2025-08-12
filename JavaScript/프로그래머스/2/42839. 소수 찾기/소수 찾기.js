function solution (numbers) {
    const numberList = numbers.split("");
    const uniqueNumber = new Set();
    let primeCount = 0;
    
    function isPrime(num) {
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num) ; i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    function createNumberCombination(arr, prefix){
        if(prefix.length > 0){
            uniqueNumber.add(Number(prefix));
        }
        
        for(let i  = 0 ; i < arr.length; i++){
            const newPrefix = arr[i] + prefix;
            const remainingNumber = [...arr];
            remainingNumber.splice(i,1);
            createNumberCombination(remainingNumber, newPrefix);
        }
    }
    
    createNumberCombination(numberList, "");
    
    for(const e of uniqueNumber){
        if(isPrime(e)) primeCount++;
    }
    
    return primeCount;
}