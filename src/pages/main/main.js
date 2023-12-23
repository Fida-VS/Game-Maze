
import styled from 'styled-components';

const MainContainer = ({ className }) => {

	return (
		<div className={className}>
               Главная
		</div>
	);
};

export const Main = styled(MainContainer)`

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 850px;

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;

	}

	& .no-posts-found {
		font-size: 18px;
		margin-top: 40px;
		text-align: center;
	}
`;
