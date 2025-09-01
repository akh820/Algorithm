function solution(dartResult) {
    const result = []; // [1] 
    let temp = 0;
    for(let i = 0 ; i < dartResult.length; i++){
        switch(dartResult[i]){
            case "S" :
                temp = Math.pow(temp, 1);
                break;
            case "D" :
                temp = Math.pow(temp, 2);
                break;
            case "T" :
                temp = Math.pow(temp, 3);
                break;
            case "*" :
                if(result.length === 0){
                    result.push(temp*2);
                } else {
                    result[result.length-1] *= 2;
                    result.push(temp*2);
                }
                temp = 0;
                break;
            case "#" :
                result.push((-1)*temp);
                temp = 0;
                break;
            default: 
                if(temp !== 0){
                    result.push(temp);
                }
                if(dartResult[i] === "1" && dartResult[i+1] === "0"){
                    temp = 10;
                    i++;
                } else {
                    temp = Number(dartResult[i]);
                }
                break;
        }
    }
    result.push(temp);
    
    return result.reduce((acc, cur)=>{return acc+cur},0);
}