function solution(N, number) {
    const set = Array.from({length:9}, () => new Set());
    
    for(let i = 0 ; i < 9; i++){
        set[i].add(Number(String(N).repeat(i)));
        for(let j = 0 ; j < i; j++){
            const k = i - j;
            for(const num1 of set[j]){
                for(const num2 of set[k]){
                    set[i].add(num1 + num2);
                    set[i].add(num1 - num2);
                    set[i].add(num1 * num2);
                    if(num2 !== 0){
                        set[i].add(Math.floor(num1 / num2));
                    }
                }
            }
        }
        if(set[i].has(number)) return i;
    }
    return -1;
}