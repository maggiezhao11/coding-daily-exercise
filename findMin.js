const arr = [64, 25, 12, 22, 11];
let min = arr[0]; 

const findMin = function (array) {
	
	for(let i = 0; i < array.length - 1; i++) {
		if(array[i+1] < array[i]) {
			min = array[i+1];		
		}
	}
	
}

findMin(arr);

console.log(min);


//outcome:11

