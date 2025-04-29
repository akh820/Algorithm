function solution(answers) {
    let scoreList = [];
    const a1 = per1(answers);
    const a2 = per2(answers);
    const a3 = per3(answers);
    
    scoreList.push(a1,a2,a3);
    
    const max = Math.max(...scoreList);
    
    let answer = [];
    
    for(let i = 0 ; i < scoreList.length ; i++){
        if(scoreList[i] === max) {
            answer.push(i+1);
        }
    }
    
    answer.sort((a,b) => a - b);
    
    return answer;
}

function per1(arr){
    let correctCount = 0;
    const rule1 = [1,2,3,4,5];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === rule1[i % 5]) correctCount++;
    }
    return correctCount;
}
function per2(arr){
    let correctCount = 0;
    const rule2 = [2,1,2,3,2,4,2,5];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === rule2[i % rule2.length]) correctCount++;
    }
    return correctCount;
}
function per3(arr){
    let correctCount = 0;
    const rule3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === rule3[i % rule3.length]) correctCount++;
    }
    return correctCount;
}
// function max(arr){
//     let tempArr = [];
//     let tempMax = arr[0];
//     let number = 1;
//     for(let i = 0; i < arr.length; i++){
//         if(tempMax < arr[i]){
//             tempArr.push(number);
//             number++;
//         } else {
//             tempArr.push(number);
//         }
//     }
//     return tempArr;
// }