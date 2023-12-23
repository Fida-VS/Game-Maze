import { Routes, Route } from 'react-router-dom';
import { Header, Footer} from './components';
import { Main } from './pages/main/main';
//import { Authorization, Main, Registration } from './pages';
import { MazePage } from './pages/maze-page/maze-page';
import styled from 'styled-components';


const GameColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;


export const Game = () => {

	return (
		<GameColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<div>авторизация</div>} />
					<Route path="/register" element={<div>регистрация</div>} />
					<Route path="/maze" element={<MazePage/>} />
					<Route path="/achievements" element={<div>достижения игрока</div>} />
					<Route path="/ratings" element={<div>рейтинги</div>} />
					<Route path="/statistics" element={<div>статистика</div>} />
					<Route path="*" element={<div>ошибка</div>} />
				</Routes>
				</Page>
			<Footer />
		</GameColumn>
	);
};











