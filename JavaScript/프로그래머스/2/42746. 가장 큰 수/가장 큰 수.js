function solution(numbers) {
    const nums = numbers.map(String).sort((a,b) => (b + a) - (a + b));
    return nums[0] === "0" ? "0" : nums.join("");
}