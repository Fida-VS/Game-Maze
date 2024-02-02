import { ACTION_TYPE } from "../actions";

const initialPostState = {
	id: '',
	content: '',
	publishedAt: '',
};

export const reviewReducer = (state = initialPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_REVIEW_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
