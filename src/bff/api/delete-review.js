export const deleteReview = async (reviewId) => fetch(`http://localhost:3005/comments/${reviewId}`, {
		method: 'DELETE',
	});
