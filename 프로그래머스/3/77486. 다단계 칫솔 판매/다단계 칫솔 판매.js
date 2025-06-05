function solution(enroll, referral, seller, amount) {
    const parent = {};
    for(let i = 0 ; i < enroll.length; i++){
        parent[enroll[i]] = referral[i];
    }
    const sum = {};
    for(let e of enroll){
        sum[e] = 0;
    }
    
    // console.log(parent);
    // console.log(sum);
    
    for(let i = 0 ; i < seller.length; i++){
        let money = amount[i] * 100;
        let name = seller[i];
        
        while(money > 0 && name !== "-"){
            let remain = Math.floor( money / 10);
            sum[name] += (money - remain);
            
            name = parent[name];
            money = remain;
        }
    }
    
    return Object.values(sum);
}