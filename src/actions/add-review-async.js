import { setReviewData } from "./set-review-data";

export const addReviewAsync = (requestServer, userId, content) => (dispatch) => {
	requestServer('addReviewOperation', userId, content).then((reviewData) => {
		dispatch(setReviewData(reviewData.res));
	});
};



