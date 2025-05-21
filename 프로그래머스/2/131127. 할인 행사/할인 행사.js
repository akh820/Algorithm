const reset = (want,number) => {
    const obj = {};
    for(let i = 0 ; i < want.length; i++){
        obj[want[i]] = number[i];
    }
    return obj;
}

function solution(want, number, discount) {
    const n = number.reduce((a,b) => a+b,0);
    let answer = 0;
    for(let i = 0; i <= discount.length - n; i++){
        const fruits = reset(want, number)
        let count = 0;
        for(let j = i ; j < n + j ; j++){
            const name = discount[j];
            if(fruits[name]){
                fruits[name] -= 1;
                count++;
            } else {
                break
            }
        }
        if(count === n) answer++;
    }
    return answer;
}