import { Maze } from './components/maze/maze';
import { useEffect, useState } from 'react';
import { getMaze } from './utils/get-maze';
import { getUnits, getCharacter } from './utils';
import { SIZE_OF_SIDE } from '../../constants';
import styled from 'styled-components';

const MazePageContainer = ({ className }) => {
	let maze = getMaze(SIZE_OF_SIDE);
	let units = getUnits(maze);
	let character = getCharacter(maze, units);

	const [mazeLayer, setMazeLayer] = useState([]);
	const [unitsLayer, setUnitsLayer] = useState([]);
	const [characterLayer, setCharacterLayer] = useState([]);

	useEffect(() => {
		setMazeLayer(maze);
		setUnitsLayer(units);
		setCharacterLayer(character);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let startPointY;
	let startPointX;
	for (let y = 0; y < characterLayer.length; y++) {
		for (let x = 0; x < characterLayer[y].length; x++) {
			if (characterLayer[y][x] === 6) {
				startPointY = y;
				startPointX = x;
			}
		}
	}

	useEffect(() => {
		const onKeypress = (e) => {
			console.log(e);

			let newCharacterLayer = characterLayer.slice();
			// eslint-disable-next-line default-case
			switch (e.code) {
				case 'KeyA':
					if (characterLayer[startPointY - 1][startPointX] !== 0) {
						return;
					}

					if (characterLayer[startPointY - 1][startPointX] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY - 1][startPointX] = 6;
					}
					setCharacterLayer(newCharacterLayer);
					console.log(characterLayer);
					break;
				case 'KeyD':
					if (characterLayer[startPointY + 1][startPointX] !== 0) {
						return;
					}

					if (characterLayer[startPointY + 1][startPointX] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY + 1][startPointX] = 6;
					}
					setCharacterLayer(newCharacterLayer);
					console.log(characterLayer);
					break;
				case 'KeyW':
					if (characterLayer[startPointY][startPointX - 1] !== 0) {
						return;
					}

					if (characterLayer[startPointY][startPointX - 1] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX - 1] = 6;
					}
					setCharacterLayer(newCharacterLayer);
					console.log(characterLayer);
					break;
				case 'KeyS':
					if (characterLayer[startPointY][startPointX - 1] !== 0) {
						return;
					}

					if (characterLayer[startPointY][startPointX + 1] === 0) {
						newCharacterLayer[startPointY][startPointX] = 0;
						newCharacterLayer[startPointY][startPointX + 1] = 6;
					}
					setCharacterLayer(newCharacterLayer);
					console.log(characterLayer);
					break;
			}
			//console.log("startPointVerx " + characterLayer[startPointY][startPointX-1]);
		};

		document.addEventListener('keypress', onKeypress);

		return () => {
			document.removeEventListener('keypress', onKeypress);
		};
	}, [characterLayer, character, startPointY, startPointX]);

	return (
		<div className={className}>
			<Maze
				mazeLayer={mazeLayer}
				unitsLayer={unitsLayer}
				characterLayer={characterLayer}
			/>
			<div className="control-panel"></div>
		</div>
	);
};

export const MazePage = styled(MazePageContainer)`
	display: flex;
	justify-content: space-around;
	align-items: center;

	& .control-panel {
		width: 150px;
		height: 300px;
		border: 1px solid black;
	}
`;
