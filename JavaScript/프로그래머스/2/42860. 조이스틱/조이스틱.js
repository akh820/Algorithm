function solution(name) {
    
    let upDownCount = 0;
    
    for(const e of name){
        upDownCount += upDown(e);
    }
    
    let minMove = name.length - 1;
    for(let i = 0 ; i < name.length; i++){
        let nextIndex = i + 1;
        while(nextIndex < name.length && name[nextIndex] === "A"){
            nextIndex++;
        }
        
        const goRightThenTurn = (i * 2) + (name.length - nextIndex);
        const goLeftThenTurn = (name.length - nextIndex) * 2 + i;
        
        minMove = Math.min(goRightThenTurn, goLeftThenTurn, minMove);
    }
    
    
    function upDown(alphabet){
        const code = alphabet.charCodeAt(0);
        return Math.min(code - 65, 91 - code);
    }
        
    return upDownCount + minMove;
    
}