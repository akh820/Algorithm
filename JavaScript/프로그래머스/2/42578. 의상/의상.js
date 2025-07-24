function solution(clothes){
    const clothesMap = {};
    for(const [name, type] of clothes){
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }
    
    const combination = Object.values(clothesMap).reduce((acc,cur) => {
        return acc * (cur + 1); // +1 해주는 아무것도 안입은 경우의 수 추가
    }, 1);
    
    return combination - 1;
}