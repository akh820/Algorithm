function solution(numbers) {
    const temp = numbers.map(String).sort((a,b) => (b+a) - (a+b));
    return temp[0] === "0" ? "0" : temp.join("");
}