function solution(name) {
  let totalCount = 0;
  for(const e of name){
    totalCount += upDown(e);
  }

  let minMove = name.length-1;

  for(let i = 0 ; i < name.length; i++){
    let nextIndex = i + 1;
    while(nextIndex < name.length && name[nextIndex] === "A"){
      nextIndex++;
    }

    const goRightThenTurnLeft = ( i * 2) + (name.length - nextIndex);
    const goLeftThenTurnRight = ( (name.length - nextIndex) * 2) + i;

    minMove = Math.min(minMove, goRightThenTurnLeft, goLeftThenTurnRight);

  }

  return totalCount + minMove;
}

function upDown(alphabet){
    const value = alphabet.charCodeAt(0);
    return Math.min(value - 65, 91 - value);
  }