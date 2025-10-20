function solution(numbers) {
    const list = numbers.map(String).sort((a,b) => (b+a) - (a+b));
    // b + a = "610", a + b = "106"; 504 양수 바꿈
    // b + a = "102", a + b = "210"; -109 음수 안바꿈
    return list[0] === "0" ? "0" : list.join("");
}