class RubikCode {
	_arr = [];
	_isDevelopment = false;
	_sideMatrix = {
		"F": [
			[3, 2], [4, 2], [5, 2],
			[2, 5], [2, 4], [2, 3],
			[5, 6], [4, 6], [3, 6],
			[6, 3], [6, 4], [6, 5],
		],
		"R": [
			[6, 5], [7, 5], [8, 5],
			[3, 5], [4, 5], [5, 5],
			[0, 5], [1, 5], [2, 5],
			[5, 9], [4, 9], [3, 9],
		],
		"U": [
			[3, 3], [3, 4], [3, 5],
			[3, 0], [3, 1], [3, 2],
			[3, 9], [3, 10], [3, 11],
			[3, 6], [3, 7], [3, 8],
		],
		"B": [
			[5, 8], [4, 8], [3, 8],
			[0, 5], [0, 4], [0, 3],
			[3, 0], [4, 0], [5, 0],
			[8, 3], [8, 4], [8, 5],
		],
		"L": [
			[5, 11], [4, 11], [3, 11],
			[0, 3], [1, 3], [2, 3],
			[3, 3], [4, 3], [5, 3],
			[6, 3], [7, 3], [8, 3],
		],
		"D": [
			[5, 0], [5, 1], [5, 2],
			[5, 3], [5, 4], [5, 5],
			[5, 6], [5, 7], [5, 8],
			[5, 9], [5, 10], [5, 11],
		],
	};
	_faceCirclePoints = {
		"F": [4, 4],
		"R": [4, 7],
		"U": [1, 4],
		"B": [4, 10],
		"L": [4, 1],
		"D": [7, 4],
	};
	EIGHT_NEIGHBORS = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
	VALID_ACTIONS = ["F", "F'", "R", "R'", "U", "U'", "B", "B'", "L", "L'", "D", "D'"];

	constructor(isDevelopment = false) {
		this._isDevelopment = isDevelopment;
		this.init();
	}

	init = () => {
		for (let i = 0; i < 9; i++) {
			this._arr.push([]);
			for (let j = 0; j < 12; j++) {
				if (this._isDevelopment) {
					this._arr[i].push('  ');
				} else {
					this._arr[i].push(' ');
				}
			}
		}

		this._fillSide(0, 3, 'W')
			._fillSide(3, 0, 'O')
			._fillSide(3, 3, 'G')
			._fillSide(3, 6, 'R')
			._fillSide(3, 9, 'B')
			._fillSide(6, 3, 'Y');

		this._sideMatrix["F'"] = this._sideMatrix["F"].slice().reverse();
		this._sideMatrix["R'"] = this._sideMatrix["R"].slice().reverse();
		this._sideMatrix["U'"] = this._sideMatrix["U"].slice().reverse();
		this._sideMatrix["B'"] = this._sideMatrix["B"].slice().reverse();
		this._sideMatrix["L'"] = this._sideMatrix["L"].slice().reverse();
		this._sideMatrix["D'"] = this._sideMatrix["D"].slice().reverse();

		this._faceCirclePoints["F'"] = this._faceCirclePoints["F"].slice();
		this._faceCirclePoints["R'"] = this._faceCirclePoints["R"].slice();
		this._faceCirclePoints["U'"] = this._faceCirclePoints["U"].slice();
		this._faceCirclePoints["B'"] = this._faceCirclePoints["B"].slice();
		this._faceCirclePoints["L'"] = this._faceCirclePoints["L"].slice();
		this._faceCirclePoints["D'"] = this._faceCirclePoints["D"].slice();

		return this;
	}

	_fillSide = (startRow, startCol, val) => {
		let cnt = 0;
		for (let row = startRow; row < startRow + 3; row++) {
			for (let col = startCol; col < startCol + 3; col++) {
				if (this._isDevelopment) {
					cnt++;
					this._arr[row][col] = val + cnt;
				} else {
					this._arr[row][col] = val;
				}
			}
		}

		return this;
	}

	printStatus = () => {
		for (let i = 0; i < 9; i++) {
			console.log(Array(10).join(" "), this._arr[i].join(' '));
		}

		return this;
	}

	_changeValue = (sourceIndex, targetIndex, convertMatrix) => {
		const sourceRow = convertMatrix[sourceIndex][0];
		const sourceCol = convertMatrix[sourceIndex][1];

		const targetRow = convertMatrix[targetIndex][0];
		const targetCol = convertMatrix[targetIndex][1];

		this._arr[targetRow][targetCol] = this._arr[sourceRow][sourceCol];

		return this;
	}

	_sideRotate = (action) => {
		const convertMatrix = this._sideMatrix[action];
		if (convertMatrix) {
			const tempValue1 = this._arr[convertMatrix[0][0]][convertMatrix[0][1]],
				tempValue2 = this._arr[convertMatrix[1][0]][convertMatrix[1][1]],
				tempValue3 = this._arr[convertMatrix[2][0]][convertMatrix[2][1]];

			for (let i = 4; i > 1; i--) {
				for (let j = 0; j < 3; j++) {
					const sourceIndex = (i * 3 + 12 - 3 + j) % 12;
					const targetIndex = (i * 3 + 12 + j) % 12;
					this._changeValue(sourceIndex, targetIndex, convertMatrix);
				}
			}

			let targetRow = convertMatrix[3][0];
			let targetCol = convertMatrix[3][1];
			this._arr[targetRow][targetCol] = tempValue1;

			targetRow = convertMatrix[4][0];
			targetCol = convertMatrix[4][1];
			this._arr[targetRow][targetCol] = tempValue2;

			targetRow = convertMatrix[5][0];
			targetCol = convertMatrix[5][1];
			this._arr[targetRow][targetCol] = tempValue3;
		}

		return this;
	}

	_faceRotate = (action) => {
		const p = this._faceCirclePoints[action];
		if (p.length > 0) {
			let neighbors = [];


			if (action === "F" || action === "R" || action === "U" || action === "B" || action === "L" || action === "D") {
				neighbors = this.EIGHT_NEIGHBORS;
			} else {
				neighbors = this.EIGHT_NEIGHBORS.slice().reverse();
			}

			if (neighbors.length > 0) {
				const tempValue1 = this._arr[p[0] + neighbors[7][0]][p[1] + neighbors[7][1]],
					tempValue2 = this._arr[p[0] + neighbors[6][0]][p[1] + neighbors[6][1]];
				for (let i = neighbors.length - 1; i >= 2; i--) {
					const targetRow = p[0] + neighbors[i][0];
					const targetCol = p[1] + neighbors[i][1];
					const sourceRow = p[0] + neighbors[i - 2][0];
					const sourceCol = p[1] + neighbors[i - 2][1];

					// console.log(targetRow, targetCol, sourceRow, sourceCol);
					this._arr[targetRow][targetCol] = this._arr[sourceRow][sourceCol];
				}

				let targetRow = p[0] + neighbors[1][0];
				let targetCol = p[1] + neighbors[1][1];
				this._arr[targetRow][targetCol] = tempValue1;

				targetRow = p[0] + neighbors[0][0];
				targetCol = p[1] + neighbors[0][1];
				this._arr[targetRow][targetCol] = tempValue2;
			}
		}

		return this;
	}

	validateAction = (action) => {
		return this.VALID_ACTIONS.includes(action)
	}

	rotate = (action) => {
		this._sideRotate(action);
		this._faceRotate(action);

		return this;
	}

	_handleActions = (actions) => {
		for (let i = 0; i < actions.length; i++) {
			if (this.validateAction(actions[i])) {
				// there are mainly 2 parts in rotation - side rotation & face rotation
				this.rotate(actions[i])
			}
		}

		return this;
	}

	getStatus = () => this._arr;

	executeAction = (actions) => {
		actions = actions
			.trim()
			.toUpperCase()
			.split(' ')
			.map(action => action.trim())
			.filter(action => action !== '');

		return this._handleActions(actions);
	}
}

module.exports = RubikCode;
