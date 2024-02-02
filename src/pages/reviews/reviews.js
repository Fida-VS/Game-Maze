import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H2, Icon } from '../../components';
import { Review } from './review/review';
import { selectUserId, selectUserRole } from '../../selectors';
import { useServerRequest } from '../../hooks';
import { addReviewAsync } from '../../actions';
import { checkAccess } from '../../utils';
import { ROLE } from '../../constants/role';


const ReviewsContainer = ({ className }) => {
	const [reviews, setReviews] = useState([]);
    const [shouldUpdateReviewList, setShouldUpdateReviewList] = useState(false);
	const [newReview, setNewReview] = useState('');
	const userRole = useSelector(selectUserRole);
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();


	useEffect(() => {
		requestServer('fetchReviews').then(
			(reviewsRes) => {
				setReviews(reviewsRes.res);
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, reviews, shouldUpdateReviewList, userRole]);


	const onReviewRemove = (reviewId) => {

		console.log('удалить')

		if(!checkAccess([ROLE.ADMIN], userRole)){
			return;
		}
		requestServer('removeReview', reviewId).then(() => {
			setShouldUpdateReviewList(!shouldUpdateReviewList);
		});

	};


	const onNewReviewAdd = (userId, content) => {
		dispatch(addReviewAsync(requestServer, userId, content));
		setNewReview('');
	};



	return (
		<div className={className}>
			<H2>Ваши отзывы</H2>
			<div className="new-review">
				<textarea
					name="review"
					value={newReview}
					placeholder="Отзыв..."
					onChange={({ target }) =>
						setNewReview(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane"
					margin="0 0 0 10px"
					size="18px"
					onClick={() => onNewReviewAdd(userId, newReview)}
				/>
			</div>

			<div className="reviews">
				{reviews.map(({ id, author, content, publishedAt }) => (
					<Review
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						onReviewRemove={() => onReviewRemove(id)}
					/>
				))}
			</div>
		</div>
	);
};

export const Reviews = styled(ReviewsContainer)`

	width: 580px;
	margin: 0 auto;

	& .new-review {
		width: 100%;
		display: flex;
		margin: 20px 0 0;
	}

	& .new-review textarea {
		width: 550px;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;



