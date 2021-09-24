//selection Sort  , complicity O(n * n);
const arr = [64, 25, 12, 22, 11];

const min = function (array, startIndex) {
  let minIndex = findMinIndex(array, startIndex);
  let temp = array[startIndex];
  array[startIndex] = array[minIndex];
  array[minIndex] = temp; 

}

const findMinIndex = function (array, startIndex) {
  let minIndex = startIndex;
	for(let i = startIndex; i < array.length; i++) {
		if(array[minIndex] > array[i]) {
      minIndex = i; 	
		}
	} 
  return minIndex; 
}


const selectionSort = function (array) {
//step 1: find the smallest one and put it at the beginning of array.
  for(let i = 0; i < array.length; i++) {
    min(array, i);
  }

//step 2: repeat the step 1 and get all the smaller ones in the right order.

};

selectionSort(arr);
console.log(arr);



