function arrayFlattener(arr) {
	let flattenedArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			for (let j = 0; j < arr[i].length; j++) {
				flattenedArray.push(arr[i][j]);
			}
		} else {
			flattenedArray.push(arr[i]);
		}
	}
	return flattenedArray;
}

function zooInventory(animals) {
	let newArr = [];
	let type;
	let name;
	let age;
	for (let i = 0; i < animals.length; i++) {
		// if (Array.isArray(animals[i])) {
		for (let j = 0; j < animals[i].length; j++) {
			//  newArr.push(animals[i][j])
			type = animals[i][0];
			name = animals[0];
			age = animals[i][1];
		}
	}
	// }
	newArr.push(`${name} the ${type} is ${age}`);

	return [newArr[0]];
}

function removeColumns(originalGrid, numColums) {
	const numRows = originalGrid.length;
	let newGrid = [];

	for (let i = 0; i < numRows; i++) {
		let newRow = [];

		for (let j = 0; j < originalGrid[i].length - numColums; j++) {
			newRow.push(originalGrid[i][j]);
			newGrid.push(newRow);
		}
	}

	return newGrid;
}

function golfScore(par, strokes) {
	if (Math.abs(strokes - par) === 2) {
		// console.log("it is ");
	}
	return strokes - par === 2
		? "Double Bogey"
		: par && strokes === par - 1
		? "Birdie"
		: par === strokes
		? "Par"
		: par > strokes && strokes === 1
		? "Hole-in-one!"
		: par < strokes && strokes === 7
		? "Go Home!"
		: Math.abs(par - strokes) || Math.abs(strokes - par) === 1
		? "Bogey"
		: null;
}

//!! Task
// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
// Input validation
// Assume all input is valid.
const zipWith = (func, array1, array2) => {
	//!! put the 2 arrays (i.e array1 and array2) in another array to make a nested array.
	//TODOS Loop though the nested array
	//!! implement the passed function with the 2 arrays

	const nestedArray = [array1, array2];
	const result = []
	for (let i = 0; i < nestedArray.length; i++){
		for (let j = 0; j < nestedArray[i].length; j++){
			
			
			result.push(func(nestedArray[0][j],nestedArray[1][j]))
		}
	}
	console.log(result);
	return nestedArray;
};

module.exports = {
	arrayFlattener,
	zooInventory,
	removeColumns,
	golfScore,
	zipWith,
};
