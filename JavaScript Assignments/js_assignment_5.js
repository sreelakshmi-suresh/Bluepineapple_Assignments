let depth = 1;
function GetDepth(arr){
for(let i=0;i<arr.length;i++){
    current=arr[i];
    if(Array.isArray(current)){
        depth+=1;
        GetDepth(current)
    }
}
 return depth;

}

console.log(GetDepth([12,2,[39,[40,[50,[1,45,[7,8]]],6],9],8]));
