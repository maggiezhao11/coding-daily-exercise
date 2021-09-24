//selection Sort  , complicity O(n * n);

//double loop method to deal with selectionSort
const arr = [64, 25, 12, 22, 11];

const selectionSort = function (array) {
  for(let i = 0; i < array.length - 1; i++) {
    let minIndex = i; 
    //find out minIndex
    for(let j = 1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    //swap the min to the beginning of array
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

}


selectionSort(arr);
console.log(arr);


function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     // 寻找最小的数
              minIndex = j;                 // 将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  return arr;
}

/* function way to deal with double loop, put the inner logic into function then only use one loop in the sort.   */
// const min = function (array, startIndex) {
//   let minIndex = findMinIndex(array, startIndex);
//   let temp = array[startIndex];
//   array[startIndex] = array[minIndex];
//   array[minIndex] = temp; 

// }

// const findMinIndex = function (array, startIndex) {
//   let minIndex = startIndex;
// 	for(let i = startIndex; i < array.length; i++) {
// 		if(array[minIndex] > array[i]) {
//       minIndex = i; 	
// 		}
// 	} 
//   return minIndex; 
// }


// const selectionSort = function (array) {
// //step 1: find the smallest one and put it at the beginning of array.
//   for(let i = 0; i < array.length; i++) {
//     min(array, i);
//   }

// //step 2: repeat the step 1 and get all the smaller ones in the right order.

// };

// selectionSort(arr);
// console.log(arr);



