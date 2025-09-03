function solution(str1, str2) {
    const A = [];
    const B = [];
    let string = "";
    
    for(let i = 0 ; i < str1.length; i++){
        if(checkAlphabet(i, str1)){
            string += str1[i].toLowerCase();
        }
        if(!str1[i+1]) break;
        
        if(checkAlphabet(i+1, str1)){
            string += str1[i+1].toLowerCase();
        }
        if(string.length === 2){
            A.push(string);
        } 
        string = "";
    }
    
    string = "";
    
    for(let i = 0 ; i < str2.length; i++){
        if(checkAlphabet(i, str2)){
            string += str2[i].toLowerCase();
        }
        if(!str2[i+1]) break;
        
        if(checkAlphabet(i+1, str2)){
            string += str2[i+1].toLowerCase();
        }
        if(string.length === 2){
            B.push(string);
        } 
        string = "";
    }

    const copyA = [...A];
    const copyB = [...B];
    let intersectList = [];
    
    for(let i = 0 ; i < copyA.length; i++){
        for(let j = 0 ; j < copyB.length; j++){
            if(copyA[i] === copyB[j]){
                const index = copyB.indexOf(copyB[j]);
                intersectList.push(copyB[index]);
                copyB.splice(j,1);
                j--;
                break;
            }
        }
    }
    //[FR, RA, AN, NC, CE]
    //[FR, RE, EN, NC, CH]
    let intersect = intersectList.length
    let union = (copyA.length) + copyB.length;
    // console.log(intersect);
    // console.log(union);
    
    function checkAlphabet(index, string){
        let element = string[index].toLowerCase();
        let test = element.charCodeAt(0);
        return (test >= 97 && test <= 123)
    }
    // console.log(copyA);
    // console.log(copyB);// 더 간결한 수정안
    return union === 0 ? 65536 : Math.floor(intersect / union * 65536);
}