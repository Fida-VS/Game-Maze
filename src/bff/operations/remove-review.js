import { deleteReview } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constants/role";

export const removeReview = async (hash, reviewId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	deleteReview(reviewId);
	 return {
		error: null,
		res: true,
	 };
};
