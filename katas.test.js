const {
	arrayFlattener,
	zooInventory,
	removeColumns,
	golfScore,descendingOrder, makeUpperCase
} = require("./katas.js");

describe("arrayFlattener", () => {
	test("All the number should be in one array rather than a nested array", () => {
		const input = [1, [2, 3], 4, 5];
		const actual = arrayFlattener(input);
		const expected = [1, 2, 3, 4, 5];
		expect(actual).toEqual(expected);
	});
});

describe("zooInventory", () => {
	test("return a sentence in an array when passed a two dimensional array ", () => {
		const input = ["Nemo", ["fish", 5]];
		const actual = zooInventory(input);
		const expected = ["Nemo the fish is 5"];
		expect(actual).toEqual(expected);
	});
});

describe("removeColumns", () => {
	test("should remove the number of coloumns from the passed in the function from the colomns ", () => {
		const originalGrid = [
			[1, 2, 3],
			[1, 2, 3],
			[1, 2, 3],
			[1, 2, 3],
		];
		const numColums = 2;
		const actual = removeColumns(originalGrid, numColums);
		const expected = [[1], [1], [1], [1]];
		expect(actual).toEqual(expected);
	});
});

describe("golfScore", () => {
	test("returns 'Birdie' if par is more that stroke by 1", () => {
		const par = 3;
		const strokes = 2;
		const actual = golfScore(par, strokes);
		const expected = "Birdie";
		expect(actual).toBe(expected);
	});
	test("should return \'Par\' if the par and the stroke are the same amount", () => {
		const par = 4;
		const strokes = 4;
		const actual = golfScore(par, strokes);
		const expected = "Par";
		expect(actual).toBe(expected);
	});
	test("should return \'Bogey\' if par and strokes have a difference of 1", () => {
		const par = 4;
		const strokes = 5;
		const actual = golfScore(par, strokes);
		const expected = "Bogey";
		expect(actual).toBe(expected);
	});

	test("should return \'Bogey\' if par and strokes have a difference of 2", () => {
		const par = 4;
		const strokes = 6;
		const actual = golfScore(par, strokes);
		const expected = "Double Bogey";
		expect(actual).toBe(expected);
	});
    test("should return \'Hole-in-one!\' if par is bigger strokes and strokes is equal to 1", () => {
			const par = 4;
			const strokes = 1;
			const actual = golfScore(par, strokes);
			const expected = "Hole-in-one!";
			expect(actual).toBe(expected);
		});
        test("should return 'Go Home!' if par is smaller strokes and strokes is equal to 7", () => {
					const par = 4;
					const strokes = 7;
					const actual = golfScore(par, strokes);
					const expected = "Go Home!";
					expect(actual).toBe(expected);
				});
});


describe('A function called descendingOrder takes any non-negative integer as an argument and returns it with its digits in descending order', () => {
	test('descendingOrder should return a number', () => {
		const num  = 2
		expect(typeof(descendingOrder(num))).toBe('number')
	});
	test(' Should return the argument passed if it is single digit', () => {
		const num = 3
		const actual = descendingOrder(num)
		const expected = 3
		expect(actual).toBe(expected)
	});
	test('should return 51 when 15 is passed to the function as an argument', () => {
		const num = 15
		const actual = descendingOrder(num)
		const expected = 51
		expect(actual).toBe(expected)
	});

	test('should return 11 when 11 is passed to the function as an argument', () => {
		const num = 11
		const actual = descendingOrder(num)
		const expected = 11
		expect(actual).toBe(expected)
	});

	
	test('should return 111 when 111 is passed to the function as an argument', () => {
		const num = 111
		const actual = descendingOrder(num)
		const expected = 111
		expect(actual).toBe(expected)
	});

	test('should return 987654321 when 123456789 is passed to the function as an argument', () => {
		const num = 123456789
		const actual = descendingOrder(num)
		const expected = 987654321
		expect(actual).toBe(expected)
	});
});


describe('makeUpperCase', () => {
	test('should convert a string to all uppercase', () => {
		const input = 'test'
		const actual = makeUpperCase(input)
		const expected = 'TEST'
		expect(actual).toBe(expected)
	});
});