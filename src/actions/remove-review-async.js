export const removeReviewAsync = (requestServer, id) => () =>
	requestServer('removeReview', id);
