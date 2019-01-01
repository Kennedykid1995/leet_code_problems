function countAndSay(n){
    if(n === null || n.length === 0){
        return "";
    }
    let curr =   "1"; 
    let num = 1; 

    while(n > 1){
        let r = ""; 
        for(let i = 0; i < curr.length; i++ ){
            console.log(num)
            if(i < curr.length && curr[i] === curr[i + 1]){
                console.log(curr)
                num++
            } else {
                r += (num + "" + curr[i]); 
                console.log(curr,"--", num)
                num = 1; 
            }
        }
        curr = r;
        console.log(curr) 
        n--;
    }
    return curr
}
// console.log(countAndSay(1)); 
console.log(countAndSay(4)); 