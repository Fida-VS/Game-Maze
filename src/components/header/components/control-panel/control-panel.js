import { Link } from 'react-router-dom';
import { Icon } from '../../../icon/icon';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;


const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {


	return (
		<div className={className}>
			<RightAligned>

					<>
						<UserName>Вася</UserName>
						<Icon
							id="fa-sign-out"
							margin="0 0 0 10px"
						/>
					</>

			</RightAligned>
			<RightAligned>
					<Icon id="fa-backward" margin="10px 0 0 0"/>

				<>
				<Link to="/post">
					<Icon id="fa-trophy" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-star" margin="10px 0 0 16px" />
				</Link>
				</>

			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
