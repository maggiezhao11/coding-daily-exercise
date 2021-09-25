// node reverse.js hello goodbye
// olleh
// eybdoog

// node reverse.js 1 fish 2 fish
// 1
// hsif
// 2
// hsif


//JS string is immutable. so we need to create a new string to store the reversed one. it is not like array.
const reverse = function (str) {
	console.log("line21:", str);
  let newStr = "";
	console.log("line23:", newStr);

  for(let i = str.length - 1; i >=0; i --) {
	  console.log("line26:", str.length);
	  
    newStr += str[i];
	   console.log("line29:", newStr);
	  console.log("line30:", str[i]);

  }
	return newStr;


}


reverse(string);


console.log(reverse(string));

reverse("hello");
