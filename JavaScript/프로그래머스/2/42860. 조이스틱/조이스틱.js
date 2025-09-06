function solution(name){
    let upDownCount = 0;
    for(const e of name){
        upDownCount += upDown(e);
    }
    
    let leftRightMin = name.length;
    
    for(let i = 0 ; i < name.length; i++){
        let currentIndex = i + 1;
        while(currentIndex < name.length && name[currentIndex] === "A"){
            currentIndex++;
        }
                
        const goRightThenTurnLeft = (i * 2) + (name.length - currentIndex);
        const goLeftThenTurnRight = (name.length - currentIndex) * 2 + i;
        leftRightMin = Math.min(goRightThenTurnLeft,goLeftThenTurnRight,leftRightMin);
    }
    
    return upDownCount + leftRightMin;
}

function upDown(alphabet){
    const code = alphabet.charCodeAt(0);
    return Math.min(code - 65, 91 - code);
}