function CheckArray(arr){
    let arr_1=[];
    let arr_2=[];
    for(i=0;i<arr.length;i++){
        var StringWithNumber= arr[i].match(/\d/g);
        if (StringWithNumber != null){
            arr_1.push(arr[i]);
        }
        }
        return arr_1;
    }
    

console.log(CheckArray(['many1','uthfg','uh65g','4fdf','jghgu']));
console.log(CheckArray(['trytur','huhik','uhub'])); 
console.log(CheckArray(['iu5jk','kij8','hyu','i8uh','khfyg','iunm','ij8h']));        