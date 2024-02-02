import { Routes, Route } from 'react-router-dom';
import { Header, Footer} from './components';
import { Achievements, Authorization, Main, Registration, Reviews } from './pages';
import { MazePage } from './pages/maze-page/maze-page';
import styled from 'styled-components';
import { Users } from './pages/users/users';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';


const GameColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #b2b2b2;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;


export const Game = () => {


	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if(!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({
			...currentUserData,
			roleId: Number(currentUserData.roleId),
		}));
	}, [dispatch]);

	return (
		<GameColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/maze" element={<MazePage/>} />
					<Route path="/achievements" element={<Achievements />} />
					<Route path="/ratings" element={<div>рейтинги</div>} />
					<Route path="/reviews" element={<Reviews />} />
					<Route path="/users" element={<Users />} />
					<Route path="*" element={<div>ошибка</div>} />
				</Routes>
				</Page>
			<Footer />
		</GameColumn>
	);
};











