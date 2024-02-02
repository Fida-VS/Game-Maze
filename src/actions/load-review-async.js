import { setReviewData } from './set-review-data';

export const loadReviewAsync = (requestServer, reviewId) => (dispatch) =>
requestServer('fetchReview', reviewId).then((reviewData) => {
	if (reviewData.res) {
		dispatch(setReviewData(reviewData.res));
	}
	return reviewData;
});

