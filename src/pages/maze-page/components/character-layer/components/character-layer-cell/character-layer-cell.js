import { SMILE } from '../../../../../../constants';
import styled from 'styled-components';

const CharacterLayerCellContainer = ({ className, val }) => {
	return (
		<div className={className}>
			{val === 6 && (<img className="smile" src={SMILE.imgPath} alt="smile" />)}
		</div>
	);
};

export const CharacterLayerCell = styled(CharacterLayerCellContainer)`
	width: 32px;
	height: 32px;
	background-color: transparent;
	


	& .smile {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: transparent;
	}
`;
