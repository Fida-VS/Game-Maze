//import { deadLocks } from '../../../../constants';
import { DeadLocksCell } from './components/deadLocksCell/deadLocksCell';
import styled from 'styled-components';

const DeadLocksContainer = ({ className, unitsLayer }) => {
	return (
		<div className={className}>
			{unitsLayer.map((row, i) => (
				<div key={i}>
					{row.map((val, j) => (
						<DeadLocksCell key={i * row.length + j} val={val} />
					))}
				</div>
			))}
		</div>
	);
};

export const DeadLocks = styled(DeadLocksContainer)`
	position: absolute;
	top: 0px;
	left: 0;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	z-index: 20;
`;
