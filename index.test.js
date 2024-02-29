const RubikCube = require('./rubikCode.js');

test('Test Initial State', () => {
	const rubikCube = new RubikCube()
	const result = rubikCube.getStatus();
	let expectedResult = [
		[' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
		['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
		['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
		['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
		[' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
	];
	expect(result).toStrictEqual(expectedResult);
});

test('Test Rotated State', () => {
	const rubikCube = new RubikCube()
	const result = rubikCube
		.executeAction("F R' U B' L D'")
		.getStatus();
	let expectedResult = [
		[' ', ' ', ' ', 'R', 'O', 'G', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'B', 'B', 'B', ' ', ' ', ' ', ' ', ' ', ' '],
		['G', 'Y', 'Y', 'O', 'R', 'R', 'Y', 'B', 'O', 'Y', 'B', 'W'],
		['O', 'O', 'G', 'O', 'G', 'W', 'R', 'R', 'W', 'O', 'B', 'Y'],
		['B', 'G', 'O', 'W', 'W', 'W', 'O', 'Y', 'R', 'Y', 'Y', 'W'],
		[' ', ' ', ' ', 'G', 'G', 'B', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'R', 'Y', 'R', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', 'R', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' '],
	];
	expect(result).toStrictEqual(expectedResult);
});


test('Test Initial State in development mode', () => {
	const rubikCube = new RubikCube(true)
	const result = rubikCube.getStatus();
	let expectedResult = [
		['  ', '  ', '  ', 'W1', 'W2', 'W3', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'W4', 'W5', 'W6', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'W7', 'W8', 'W9', '  ', '  ', '  ', '  ', '  ', '  '],
		['O1', 'O2', 'O3', 'G1', 'G2', 'G3', 'R1', 'R2', 'R3', 'B1', 'B2', 'B3'],
		['O4', 'O5', 'O6', 'G4', 'G5', 'G6', 'R4', 'R5', 'R6', 'B4', 'B5', 'B6'],
		['O7', 'O8', 'O9', 'G7', 'G8', 'G9', 'R7', 'R8', 'R9', 'B7', 'B8', 'B9'],
		['  ', '  ', '  ', 'Y1', 'Y2', 'Y3', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'Y4', 'Y5', 'Y6', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'Y7', 'Y8', 'Y9', '  ', '  ', '  ', '  ', '  ', '  '],
	];
	expect(result).toStrictEqual(expectedResult);
});

test('Test Rotated State in development mode', () => {
	const rubikCube = new RubikCube(true)
	const result = rubikCube
		.executeAction("F R' U B' L D'")
		.getStatus();

	let expectedResult = [
		['  ', '  ', '  ', 'R1', 'O4', 'G7', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'B8', 'W5', 'W2', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'B9', 'B4', 'B7', '  ', '  ', '  ', '  ', '  ', '  '],
		['G3', 'Y8', 'Y7', 'O7', 'R6', 'R9', 'Y9', 'B2', 'O9', 'Y1', 'B6', 'W9'],
		['O8', 'O5', 'G4', 'O6', 'G5', 'W6', 'R2', 'R5', 'W4', 'O2', 'B5', 'Y4'],
		['B1', 'G6', 'O3', 'W7', 'W8', 'W1', 'O1', 'Y6', 'R7', 'Y3', 'Y2', 'W3'],
		['  ', '  ', '  ', 'G1', 'G2', 'B3', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'R4', 'Y5', 'R8', '  ', '  ', '  ', '  ', '  ', '  '],
		['  ', '  ', '  ', 'R3', 'G8', 'G9', '  ', '  ', '  ', '  ', '  ', '  '],
	];
	expect(result).toStrictEqual(expectedResult);
});