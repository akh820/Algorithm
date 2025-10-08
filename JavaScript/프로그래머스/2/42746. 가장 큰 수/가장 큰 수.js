function solution(numbers) {
    const abc = numbers.map(String).sort((a,b) => (b + a) - (a + b));
    
    return abc[0] === "0" ? "0" : abc.join("");
}