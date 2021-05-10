import {
	GET_PROFILE_START,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAILURE,
	UNSET_PROFILE,
} from "../actions";

const initialState = {
	profile: null,
	errors: {}
};

export const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_PROFILE_SUCCESS:
			return {
				...state,
				profile: action.payload.profile
			};
		case GET_PROFILE_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};
		case UNSET_PROFILE:
			return {
				...state,
				profile: null,
			}
		default:
			return {
				...state
			};
	}
};

export default profileReducer;