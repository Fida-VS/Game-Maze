import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Description = styled.div`
    font-size: 34px;
	font-weight: bold;
	margin-left: -40px;
	margin-top: 20px;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Уровень 1
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	z-index: 50;
`;
