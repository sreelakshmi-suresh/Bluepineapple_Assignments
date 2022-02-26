function AddNumbers(...args){
    let sum = 0;
    for (let arg of args){
        sum += arg;
    } 
    let digits=[];
    while(sum>0){
        digits.push(sum % 10);
        sum = parseInt(sum/10);
        }
        let result = 1;
        for (let i=0;i<digits.length;i++){
            result *= digits[i];
        }
        return result;   
} 
console.log(AddNumbers(1,2,5,5));
console.log(AddNumbers(2,5,4,5));
console.log(AddNumbers(5,5,5,5));