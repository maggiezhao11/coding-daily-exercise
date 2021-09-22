const input = "11100100111101011";

//输入01串 output两个数组，
//一个是连续1的个数
//一个是连续0的个数
//1的个数返回3，1，4，1，2
//0的个数返回2，2，1，1

const findInputCount = function (string) {
  let count0 = [];
  let count1 = [];

  for (let i = 0; i < string.length; i++) {
    let counter1 = 0;
    let counter0 = 0;
    if (string[i + 1] === string[i] && string[i] === 1) {
      counter1++;
      continue;
    } else if (string[i + 1] !== string[i]) {
      counter1++;
      count1.push(counter1);
      }
    
    if (string[i + 1] === string[i] && string[i] === 0) {
      counter0++;
      continue;
    } else if (string[i + 1] !== string[i]) {
      counter0++;
      count0.push(counter0);
    }
  }
};

findInputCount(input);
console.log();
