import { transformReview } from '../transformers';

export const getReviews = () => {

	return fetch('http://localhost:3005/reviews')
		.then((loadedReviews) => loadedReviews.json())
		.then((loadedReviews) => loadedReviews.map(transformReview));
};






