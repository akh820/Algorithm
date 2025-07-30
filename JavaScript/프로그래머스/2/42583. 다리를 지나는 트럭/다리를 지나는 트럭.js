function solution(bridge_length, weight, truck_weights) {
    const going = [];
    let sum = 0;
    let answer = 0;
    while(truck_weights.length > 0){
        const checkTruck = truck_weights[0];
        if(going.length !== 0){
            for(const e of going){
                e[1]--;
            }
            for(const e of going){
                if(e[1] <= 0){
                    going.shift();
                    sum -= e[0];
                }
            }
        }
        if(going.length < bridge_length && checkTruck <= (weight - sum)){
            const current = truck_weights.shift();
            going.push([current, bridge_length]);
            sum += current;
        }
        answer++;
    }
    return answer + bridge_length;
}