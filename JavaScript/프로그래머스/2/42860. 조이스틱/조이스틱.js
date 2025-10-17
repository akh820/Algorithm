function solution(name) {
    
    let upDownCount = 0;
    
    for(const e of name){
        upDownCount += upDown(e);
    }
    
    let leftRightCount = name.length - 1;
    
    for(let i = 0 ; i < name.length; i++){
        let nextIndex = i + 1;
        while(nextIndex < name.length && name[nextIndex] === "A"){
            nextIndex++;
        }
        
        let goRightThenTurnLeft = (i * 2) + (name.length - nextIndex);
        let goLeftThenTurnRight = (i) + (name.length - nextIndex) * 2;
        
        leftRightCount = Math.min(leftRightCount, goRightThenTurnLeft, goLeftThenTurnRight);
        
    }
    return upDownCount + leftRightCount;
}

function upDown(alphabet){
    const asc = alphabet.charCodeAt(0);
    return Math.min(asc - 65, 91 - asc);
}