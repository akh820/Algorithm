function solution(name) {
    
    function upDown(alphabet){
        const code = alphabet.charCodeAt(0);
        return Math.min(91 - code, code - 65);
    }
    
    let upDownCount = 0;
    for(const e of name){
        upDownCount += upDown(e);
    }
    let smallestCount = name.length - 1;
    
    for(let i = 0 ; i < name.length; i++){
        let nextIndex = i + 1;
        while(nextIndex < name.length && name[nextIndex] === "A"){
            nextIndex++;
        }
        const goRightThenTurnLeft = (i * 2) + (name.length - nextIndex);
        const goLeftThenTurnRight = (name.length - nextIndex) * 2 + i;
        
        smallestCount = Math.min(smallestCount, goRightThenTurnLeft, goLeftThenTurnRight);
    }
    
    return smallestCount + upDownCount;
}
