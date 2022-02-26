function getBoomerang(arr){
	let arr_1=[];
	let arr_2=[];
	for(i=0;i<arr.length;i++){
		if (arr[i]===arr[i+2]){
			(arr_1.push(arr[i]));
			(arr_1.push(arr[i+1]));
			(arr_1.push(arr[i+2]));
			
			arr_2.push(arr_1);

			arr_1=[];
		}
	}
	return arr_2;

}

console.log(getBoomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))