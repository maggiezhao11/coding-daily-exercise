const array = [ 48, 2, 36, 7, 56, 43, 6, 8, 47, 69, 83, 16];

const insertionSort = function (arr) {

for(let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let preIndex = i - 1;
  // let preCurrent = arr[i - 1];
  // using preCurrent doesn't work, it has to be changed to arr[preIndex];
   while ( preIndex >= 0 && current < arr[preIndex]) {
     arr[preIndex + 1] = arr[preIndex];
    preIndex --;
  } arr[preIndex + 1] = current;
  
} return arr;
}

insertionSort(array);

console.log(array);

// outcome :
// [
//   2,  6,  7,  8, 16,
//  36, 43, 47, 48, 56,
//  69, 83
// ]