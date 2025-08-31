function solution(n, arr1, arr2) {
    const result = [];
    const result1 = [];
    const result2 = [];
    for(const e of arr1){
        result1.push(decimalToBinary(e,n));
    }
    for(const e of arr2){
        result2.push(decimalToBinary(e,n));
    }
    for(let i = 0 ; i < result1.length; i++){
        let string = "";
        for(let j = 0 ; j < result1[i].length; j++){
            if(result1[i][j] === "#" || result2[i][j] === "#"){
                string += "#";
            } else {
                string += " ";
            }
        }
        result.push(string);
    }
    
    function decimalToBinary(decimal, exponent){
        let string = "";
        while(exponent > 0){
            if(decimal >= Math.pow(2,exponent-1) && decimal < Math.pow(2,exponent)){
                decimal -= Math.pow(2,exponent-1);
                string += "#";
            } else {
                string += " ";
            }
            exponent--;
        }
        return string;
    }
    
    return result;
}