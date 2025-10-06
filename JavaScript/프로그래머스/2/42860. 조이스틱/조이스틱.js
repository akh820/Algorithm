function solution(name) {
    
    let upDownCount = 0;
    
    for(const e of name){
        upDownCount += upDown(e);
    }
    
    let leftRightCount = name.length - 1; //일렬로 가는것을 최소값으로 계산
    
    for(let i = 0 ; i < name.length; i++){
        let currentIndex = i + 1;
        while(currentIndex < name.length && name[currentIndex] === "A"){
            currentIndex++;
        } // 건너 띄기
        
        const goRightThenTurnLeft = i * 2 + (name.length - currentIndex);
        const goLeftThenTurnRight = (name.length - currentIndex) * 2 + i;
        
        leftRightCount = Math.min(goRightThenTurnLeft, goLeftThenTurnRight, leftRightCount);
        
    }
    
    function upDown(alphabet){
        const a = alphabet.charCodeAt(0);
        return Math.min( a - 65, 91 - a);
    }
    return upDownCount + leftRightCount;
}