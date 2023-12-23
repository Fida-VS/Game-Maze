import { Icon } from '../../../icon/icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const LargeText = styled.div`
font-size: 42px;
font-weight: 500;
line-height: 48px;
margin-top: 17px;

`;


const LogoContainer = ({className}) => (
	<Link className={className} to="/">
		<Icon id="fa-code" size="50px" margin="0 10px 0 0" />
	<div>
		<LargeText>Лабиринт</LargeText>
	</div>
	</Link>
);


export const Logo = styled(LogoContainer)`
display: flex;
margin-top: -21px;
text-decoration: none;
color: black;
`;
