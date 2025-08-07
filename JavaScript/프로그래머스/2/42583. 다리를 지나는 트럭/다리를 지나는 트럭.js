function solution (bridge_length, weight, truck_weights) {
    const going = [];
    let time = 0;
    while(true){
        // 시간 끝났으면 빼는거
        if(going.length > 0){
            for(const e of going){
                e[1] -= 1; 
            }
            if(going[0][1] <= 0) going.shift();
        }
        // 비어있거나 중량 가능하면 push
        // 새로 올라올 트럭이 있고,
        if (truck_weights.length > 0) {
            const bridgeWeight = going.reduce((acc, cur) => acc + cur[0],               0);
            // 새로 올릴 트럭을 포함한 무게가 weight 이하라면
            if (bridgeWeight + truck_weights[0] <= weight) {
                going.push([truck_weights.shift(), bridge_length]);
            }
        }
        time++;
        if(going.length <= 0 && truck_weights.length <= 0) break;
    }
    return time;
}