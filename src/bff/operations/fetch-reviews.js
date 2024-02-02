import { getReviews } from '../api';


export const fetchReviews = async () => {
	const reviews  = await getReviews();

	return {
		error: null,
		res: reviews,
	};
};





