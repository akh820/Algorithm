function solution(sizes) {
    for(let e of sizes){
        if(e[0] > e[1]) [e[0],e[1]] = [e[1],e[0]];
    }
    sizes.sort((a,b) => b[0] - a[0]);
    let max1 = sizes[0][0];
    sizes.sort((a,b) => b[1] - a[1]);
    let max2 = sizes[0][1];
    // console.log(max1);
    // console.log(max2);
    return max1 * max2;
}