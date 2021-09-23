const arr = [64, 25, 12, 22, 11];

//set min = arr[0] is to in order to include the first elements in the array to be able to being compared.
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

