function solution(num_list) {
    let sum = 0;
    let multiple = 1;
    num_list.forEach( e => {
        sum += e;
        multiple *= e;
    })
    if(multiple < sum*sum){
        return 1;
    } else return 0;
}