export const getUnits = (array) => {
	let deadLocks = getAllDeadLocks(array);

	let deadLocksList = [];

	for (let y = 0; y < deadLocks.length; y++) {
		for (let x = 0; x < deadLocks[y].length; x++) {
			if(deadLocks[y][x] === 3){
				deadLocksList.push([y,x]);
			}
		}
	}

	const [i, j] = getRandomItem(deadLocksList);
	const [k, h] = getRandomItem(deadLocksList);


	deadLocks[i][j] = 4;
	deadLocks[k][h] = 5;

	return deadLocks;
}

function getAllDeadLocks(array) {
	let result = [];

	for (let y = 0; y < array.length; y++) {
		const row = [];

		for (let x = 0; x < array[y].length; x++) {
			row.push(null);
		}

		result.push(row);
	}

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (array[y][x] === 1) {
				result[y][x] = 1;
			}
		}
	}

	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (result[y][x] === 1) {
				continue;
			}
			if (
				result[y - 1][x] +
				result[y][x + 1] +
				result[y + 1][x] +
				result[y][x - 1] ===
				3
			) {
				result[y][x] = 3;
			}
		}
	}

	return result;
}

function getRandomItem(array) {                 /*TODO*/
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}




