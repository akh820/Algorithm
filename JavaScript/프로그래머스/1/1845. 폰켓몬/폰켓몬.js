function solution (nums) {
    const answer = {};
    for(const num of nums){
        answer[num] = true;
    }
    const a = Object.keys(answer).length;
    const b = nums.length / 2;
    return a >= b ? b : a;
}