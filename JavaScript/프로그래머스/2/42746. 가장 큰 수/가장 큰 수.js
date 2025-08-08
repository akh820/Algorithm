function solution(numbers) {
    
    const stringNumbers = numbers.map(e => String(e));
    
    stringNumbers.sort((a,b) => (b+a) - (a+b));
    
    return stringNumbers[0] === "0" ? "0" : stringNumbers.join("");
}
