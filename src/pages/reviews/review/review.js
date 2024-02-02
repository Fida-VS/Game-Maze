import styled from 'styled-components';
import { Icon } from '../../../components';


const ReviewContainer = ({ className, author, publishedAt, content, onReviewRemove }) => {


	return (
		<div className={className}>
			<div className="review">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="review-text">{content}</div>
			</div>

				<Icon
					id="fa-trash"
					margin="0 0 0 10px"
					size="21px"
					onClick={onReviewRemove}
				/>

		</div>
	);
};

export const Review = styled(ReviewContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .review {
		padding: 5px 10px;
		width: 550px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;

