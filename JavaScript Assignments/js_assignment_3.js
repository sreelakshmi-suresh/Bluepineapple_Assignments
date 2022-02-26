function CountLone1s(no){
let number = String(no);
let count = 0;
if(number[0]=='1' && number[1]!=0){
    count++;
}
for(let i= 1; i < number.length; i++) { 
    if((number[i]== '1') & (number[i-1] != '1') && (number[i+1] != '1')) { 
        count++;
}
}
return count;
}

console.log(`Number of lone1s is ${CountLone1s(12311521145212)}`);