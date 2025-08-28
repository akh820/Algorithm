function solution(brown, yellow) {
    const NumberOfTiles = brown + yellow;
    for(let i = 1; i <= NumberOfTiles; i++){
        let width = 0;
        let length = 0;
        if(Math.floor((NumberOfTiles / i)) * i === NumberOfTiles &&
          Math.floor((NumberOfTiles / i)) >= i) {
            width = (NumberOfTiles / i);
            length = i;
            if((width - 2) * (length - 2) === yellow) return [width, length];
        }
    }
    return NumberOfTiles;
}