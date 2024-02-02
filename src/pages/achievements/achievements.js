import { H2 } from '../../components';
import styled from 'styled-components';


const acheievements = [
{
	id: 1,
	text: "Самый короткий путь"
},
{
	id: 1,
	text: "Вы набрали 500 очков"
}

];

const AchievementsContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2>Мои достижения</H2>

			<ul className="acheievements-list">
				{acheievements.map(({ id, text }) => (
					<div
						key={id}
						text={text}
						id={id}
					>{text}</div>
				))}

			</ul>
			</div>
		
	);
};

export const Achievements = styled(AchievementsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;
