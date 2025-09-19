function solution(people, limit) {
    let boat = 0;
    
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a,b) => a - b);
    
    //50 50 50 70 80
    while(left <= right){
        if(people[left] + people[right] <= limit){
            left++;
            right--;
        } else {
            right--;
        }
        boat++;
    }
    
    return boat;
}