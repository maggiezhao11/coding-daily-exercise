const arr = [42, 12, 35, 78, 13, 46, 89, 48, 82, 96, 26];

const bubbleSort = function(array) {
	// think the second for as a function which makes the largest one to be the most right side. then the first for just calls the second for index times. 

  // write inner loop first to get idea about how it runs then write outer loop to call the inner. 
	for(let i = 0; i < array.length - 1; i++) {
		for(let j = 0; j < array.length - 1 - i; j++) {
			let temp; 
			if (array[j] > array [j + 1]) {
				temp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = temp; 
				
			}
		}
	
	}
	
}

bubbleSort(arr);

console.log(arr);

// outcome= [
//   12, 13, 26, 35, 42,
//   46, 48, 78, 82, 89,
//   96
// ]
