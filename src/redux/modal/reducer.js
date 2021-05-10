import { 
	TOGGLE_DOCTOR_SEARCH_MODAL,
	TOGGLE_VISIT_REQUEST_MODAL,
	SET_VISIT_REQUEST_MODAL_DATA,
	TOGGLE_DIAGNOSIS_CREATE_MODAL,
	SET_DIAGNOSIS_CREATE_MODAL_PATIENT,
} from "../actions";

const initialState = {
	doctorSearch: {
		isOpen: false
	},
	visitRequest: {
		isOpen: false,
		data: null
	},
	diagnosisCreate: {
		isOpen: false,
		patient: null
	}
};

export const modalReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_DOCTOR_SEARCH_MODAL:
			return {
				...state,
				doctorSearch: {
					...state.doctorSearch,
					isOpen: !state.doctorSearch.isOpen
				}
			};
		case TOGGLE_VISIT_REQUEST_MODAL:
			return {
				...state,
				visitRequest: {
					...state.visitRequest,
					isOpen: !state.visitRequest.isOpen,
				}
			};
		case SET_VISIT_REQUEST_MODAL_DATA:
			return {
				...state,
				visitRequest: {
					...state.visitRequest,
					data: action.payload.data,
				}
			};
		case TOGGLE_DIAGNOSIS_CREATE_MODAL:
			return {
				...state,
				diagnosisCreate: {
					...state.diagnosisCreate,
					isOpen: !state.diagnosisCreate.isOpen
				}
			}
		case SET_DIAGNOSIS_CREATE_MODAL_PATIENT:
			return {
				...state,
				diagnosisCreate: {
					...state.diagnosisCreate,
					patient: action.payload.patient
				}
			};
		default:
			return {
				...state
			};
	}
};

export default modalReducer;