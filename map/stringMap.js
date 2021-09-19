
const str = "adffaaffc";


// let map = {};
let result = {};

const findCountForChar = function (string) {

	
	for(let i = 0; i < str.length; i++) {
		
		if(!(string[i] in result)) {
			result[string[i]] = 1;
			;
			
		} else {
			result[string[i]] ++;
		}
	} return result;
		
};

findCountForChar(str);

console.log(result);


//outcome { a: 3, d: 1, f: 4, c: 1 }