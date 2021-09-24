
//set min = arr[0] is to in order to include the first elements in the array to be able to being compared.
const arr = [11, 25, 12, 22, 64];
let min = arr[0]; 

const findMin = function (array) {
	
	for(let i = 0; i < array.length; i++) {
		if(min > array[i]) {
			min = array[i];		
		}
	}
	
}

findMin(arr);


const findMinIndex = function (array) {

  let minIndex = 0;
	
	for(let i = 0; i < array.length; i++) {
		if(array[minIndex] > array[i]) {
			array[minIndex] = array[i];	
      minIndex = i; 	
		}
	}
	
}

findMin(arr);

console.log(min);


//outcome:11

for(let i = 0; i < array.length; i++ ) {
  if(array[i] < min) {
    min = array[i]
  }  
}


