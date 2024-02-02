export const transformReview = (dbReview) => ({
	id: dbReview.id,
	authorId: dbReview.author_id,
	publishedAt: dbReview.published_at,
	content: dbReview.content,
});
