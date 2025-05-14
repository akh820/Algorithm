function solution(s) {
    
        const n = s.length;
        let count = 0 ;

        //첫번째 반복문은 그냥 문자 회전용
        for(let i = 0 ; i < n ; i++){
            
            let check = true;
            const char = s.slice(i) + s.slice(0,i);
            const stack = [];
            
            for(let j = 0 ; j < n ; j++){
                const a = char[j];
                if(a === "(" || a === "[" || a === "{" ){
                    stack.push(a);
                } else {
                    const top = stack[stack.length - 1];
                    if(a === ")"){
                        if(top === "(") {
                            stack.pop();
                        } else {
                            check = false;
                            break;
                        }
                    } else if(a === "]"){
                        if(top === "[") {
                            stack.pop();
                        } else {
                            check = false;
                            break;
                        }
                    } else if(a === "}"){
                        if(top === "{") {
                            stack.pop();
                        } else {
                            check = false;
                            break;
                        }
                    } else {
                        check = false;
                        break;
                    }
                }
            }
            if(stack.length === 0 && check) count++;
        }
    return count;
    
}