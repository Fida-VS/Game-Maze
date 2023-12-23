

 export const getStartPoint = (array) => {
	for (let y = 0; y < array.length; y++) {
		for (let x = 0; x < array[y].length; x++) {
			if (array[y][x] === 6) {
			return	[y, x];
			}
		}
	}

 };



