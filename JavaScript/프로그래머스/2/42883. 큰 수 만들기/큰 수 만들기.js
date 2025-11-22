function solution(number, k) {
    
    const stack = [];
    
    for(const e of number){
        /*
        e가 1 일때 ) 
        num = 1 , stack.length 가 0 이므로 if문 실행안됨
        stack.push(1) , stack = [1]
        e가 9 일때 )
        num = 9, stack.length 가 1이므로 if 문 실행
        2 > 0 && stack[0] = 1 < 9 이므로 while 문 실행
        stakc.pop(); 으로 1 빠짐 , k-- 로 k = 1;
        stack.push(9) , stack = [9];
        e가 2 일때 )
        num = 2, stack.length 가 1이므로 if 문 실행
        1 > 0 && stack[0] = 9 < 2 이므로 while 문 실행 x
        stack.push(2), stack = [9,2]; 
        e가 4 일때 )
        num = 4 , stack. length = 2 > 0 이므로 if 무 ㄴ실행
        whiel(1 > 0 && stack[1] = 2 < 4) 이므로 while 문 실행
        stack.pop(); 으로 stack = [9];
        k--; 로 인해 k = 0 ;
        stack.push(4);
        */
        const num = Number(e); 
        if(stack.length > 0){ 
            while(k > 0 && stack[stack.length - 1] < e){ 
                stack.pop(); 
                k--; 
            }
        } 
        stack.push(num); 
    }
    
    return stack.slice(0, stack.length - k).join("");
}