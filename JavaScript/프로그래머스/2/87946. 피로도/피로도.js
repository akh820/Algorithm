function solution(k, dungeons) {
    /*
    [[80,20],[50,40],[30,10]] => 1, 2, 3,
    [[80,20],[30,10],[50,40]] => 1, 3, 2,
    [[50,40],[80,20],[30,10]] => 2, 1, 3,
    [[50,40],[30,10],[80,20]] => 2, 3, 1,
    [[30,10],[80,20],[50,40]] => 3, 1, 2,
    [[30,10],[50,40],[80,20]] => 3, 2, 1,
    */
    
    const array = [];

    function createDungeonOrder(arr, orderNumber){
        if(orderNumber.length === dungeons.length){
            array.push(orderNumber);
        }
        
        for(let i = 0 ; i < arr.length; i++){ //길이 3
            const newOrderNumber = [...orderNumber, arr[i]];
            // newOrderNumber = [[80,20]];
            const remainingDungeons = [...arr];
            remainingDungeons.splice(i,1);
            // remainingDungeons = [[50,40],[30,10]];
            createDungeonOrder(remainingDungeons, newOrderNumber);
        }
    }
    
    function findingMaximumClearableDungeon(newDungeons){
        //[[80,20],[30,10],[50,40]] => 1, 3, 2,
        // console.log(newDungeons); 제대로 들어옴
        let fatigue = k;
        let clearDungeon = 0;
        for(const e of newDungeons){
            //현재 피로도가 최소 필요 피로도보다 높으면? 던전 돌수있음
            if(fatigue >= e[0]){ // 80 >= 80 , 60 >= 30 , 50 >= 40
                // 현재 피로도에서 소모 피로도 빼기
                fatigue -= e[1] // 80 - 20 , 60 - 10 , 50 - 40
                clearDungeon++;
            } else {
                return clearDungeon
            }
        }
        return clearDungeon;
    }
    
    createDungeonOrder(dungeons,[]);
    
    let maximumClearDungeon = 0;
    for(const e of array){
        let clearDungeon = findingMaximumClearableDungeon(e);
        if(clearDungeon > maximumClearDungeon) {
            maximumClearDungeon = clearDungeon;
        }
    }
    return maximumClearDungeon;
}