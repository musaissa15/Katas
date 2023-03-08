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




module.exports = {
	arrayFlattener,
	zooInventory,
	removeColumns,
	golfScore,
	zipWith,
};
