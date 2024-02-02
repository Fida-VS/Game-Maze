import { addReview } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants";
//import { getReviewsWithAuthor } from "../utils";

export const addReviewOperation = async (hash, userId, content) => {

	const accessRoles = [ROLE.ADMIN, ROLE.USER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await addReview(userId, content);

	//const commentsWithAuthor = await getReviewsWithAuthor(postId);


	return {
		error: null,
		res: {
			...reviews,
		review: commentsWithAuthor,
		},
	};
};
