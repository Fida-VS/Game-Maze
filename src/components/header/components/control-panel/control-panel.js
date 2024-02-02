import { Icon } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions';
//import { checkAccess } from '../../../../utils';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	& .flag {
		width: 80px;
		height: 40px;
		transform: rotate(-90deg);
		clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
		background-color: #fff;
		border: 2px solid #000;
	}

	#fa-backward {
		margin-left: -100px;
	}
`;

// const UserName = styled.div`
// 	font-size: 18px;
// 	font-weight: bold;
// `;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	//const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>

			<RightAligned>
				<div className='flag'>

				</div>
				<Icon id="fa-backward" margin="10px 0 0 0" onClick={() => navigate(-1)} />


				<>
					<Link to="/achievements">
						<Icon id="fa-trophy" margin="10px 0 0 16px" />
					</Link>
					<Link to="/users">
						<Icon id="fa-users" margin="10px 0 0 16px" />
					</Link>
					<Link to="/ratings">
						<Icon id="fa-star" margin="10px 0 0 16px" />
					</Link>
					<Link to="/reviews">
						<Icon id="fa-file" margin="10px 0 0 16px" />
					</Link>
					{(roleId === ROLE.ADMIN || roleId === ROLE.USER) && <Icon id="fa-sign-out" margin="0 0 0 10px" onClick={onLogout} />}
				</>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
