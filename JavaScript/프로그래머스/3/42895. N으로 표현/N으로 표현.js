function solution(N, number) {
    const nums = Array.from({length: 9}, () => new Set());
    for(let i = 1 ; i < 9 ; i++){
        nums[i].add(Number(String(N).repeat(i)));
        for(let j = 1 ; j < i; j++){
            const k = i - j;
            for(const num1 of nums[k]){
                for(const num2 of nums[j]){
                    nums[i].add(num1 + num2);
                    nums[i].add(num1 - num2);
                    nums[i].add(num1 * num2);
                    if(num2 !== 0){
                        nums[i].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        if(nums[i].has(number)) return i;
    }
    return -1;
}