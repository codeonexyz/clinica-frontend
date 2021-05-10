import {
	FETCH_DOCTORS_START,
	FETCH_DOCTORS_SUCCESS,
	FETCH_DOCTORS_FAILURE,
} from "../actions";

const initialState = {
	doctors: [],
	errors: {}
};

export const doctorReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DOCTORS_SUCCESS:
			return {
				...state,
				doctors: action.payload.doctors
			};

		case FETCH_DOCTORS_FAILURE: 
			return {
				...state,
				errors: { }
			};

		default:
			return {
				...state
			};
	}
}

export default doctorReducer;