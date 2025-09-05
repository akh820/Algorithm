function solution(p) {
    
    if(p.length === 0) return p;
    
    // console.log("u = ",u);
    // console.log("v = ",v);
    
    // divide(p);
    
   function divide(arr){ // 1.arr가 ))((() 일때
        if(arr.length === 0) return "";
        let empty = "";
        let u = "";
        let v = "";
        let leftCount = 0;
        let rightCount = 0;
        for(let i = 0; i < arr.length; i++){
            u += arr[i];
            if(arr[i] === "("){
                leftCount++;
            } else {
                rightCount++;
            }
            if(leftCount === rightCount){
                v = arr.slice(i+1, arr.length);
                break;
            }
        }// 1. u = ))(( , v = ()
        // console.log("u =",u);
        // console.log("v =",v);
        if(correctBracket(u)){
            return u += divide(v); // 1. u = () + 
        } else {
            empty += "(";
            empty += divide(v); // empty + divide(()) = ( () 
            empty += ")"; // ( () )
            u[0] = ""; // )((
            u[u.length-1] = ""; // )(
            let slicedU = u.slice(1,u.length - 1); // 처음이랑 끝만 자름
            let reversedU = "";
            for(const char of slicedU){
                char === "(" ? reversedU += ")" : reversedU += "(";
            }
            for(let i = 0 ; i < u.length; i++){
                if(u[i] === "(") {
                    u[i] = ")";
                } else {
                    u[i] = "(";
                }
            } // u = ()
            return empty + reversedU; // ( () ) + ();
        }
    }
    
    function correctBracket(string){
        const stack = [];
        for(let i = 0 ; i < string.length; i++){
            const bracket = string[i];
            if(bracket === "("){
                stack.push(bracket);
            } else { // ")"
                if(stack.length === 0){
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return stack.length === 0;
    }
    
    return divide(p);
}