import styled from 'styled-components';

const FooterContainer = ({ className }) => {


	return (
		<div className={className}>
			<div>футер</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	width: 1000px;
	padding: 20px 40px;
	background-color: #fff;
`;
