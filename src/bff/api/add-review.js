import { generateDate } from '../utils';

export const addReview = (userId, content) =>
	fetch('http://localhost:3005/reviews', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			published_at: generateDate(),
			content,
		}),
	});
