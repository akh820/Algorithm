function solution(numbers) {
    const num = numbers.map(String).sort((a,b) => ( b + a ) - (a + b));
    
    return num[0] === "0" ? "0" : num.join("");
}

