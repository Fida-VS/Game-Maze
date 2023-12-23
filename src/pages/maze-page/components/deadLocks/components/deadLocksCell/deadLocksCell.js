import styled from 'styled-components';

const DeadLocksCellContainer = ({ className, val }) => {
	return (
		<div className={className}>
			<div className="circle"></div>
		</div>
	);
};

export const DeadLocksCell = styled(DeadLocksCellContainer)`
	border: 1px solid rgb(128, 128, 128, 0.2);
	width: 32px;
	height: 32px;
	background-color: transparent;

	& .circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: ${({val}) => (val === 5 ? 'green' : 'transparent')};

	}
`;
