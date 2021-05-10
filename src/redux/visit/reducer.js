import {
	VISIT_REQUEST_START,
	VISIT_REQUEST_SUCCESS,
	VISIT_REQUEST_FAILURE,
	FETCH_VISIT_PENDING_REQUESTS_START,
	FETCH_VISIT_PENDING_REQUESTS_SUCCESS,
	FETCH_VISIT_PENDING_REQUESTS_FAILURE,
	ACCEPT_VISIT_REQUEST_SUCCESS,
	ACCEPT_VISIT_REQUEST_FAILURE,
	REJECT_VISIT_REQUEST_SUCCESS,
	REJECT_VISIT_REQUEST_FAILURE,
	FETCH_VISIT_ACCEPTED_REQUESTS_SUCCESS,
	FETCH_VISIT_ACCEPTED_REQUESTS_FAILURE,
} from "../actions";
import _ from "lodash";

const initialState = {
	pendingRequests: [],
	acceptedRequests: [],
	errors: {},
	message: ""
};

export const visitReducer = (state = initialState, action) => {
	switch(action.type) {
		case VISIT_REQUEST_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				errors: ""
			};
		case VISIT_REQUEST_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};
		case FETCH_VISIT_PENDING_REQUESTS_SUCCESS:
			return {
				...state,
				pendingRequests: action.payload.pendingRequests,
				errors: {},
			};
		case FETCH_VISIT_PENDING_REQUESTS_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};
		case ACCEPT_VISIT_REQUEST_SUCCESS:

			return {
				...state,
				pendingRequests: _.filter(state.pendingRequests, visit => visit.id !== action.payload.visit.id),
				acceptedRequests: [...state.acceptedRequests, action.payload.visit],
				errors: { }
			};
		case ACCEPT_VISIT_REQUEST_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}
		case REJECT_VISIT_REQUEST_SUCCESS:
			return {
				...state,
				pendingRequests: _.filter(state.pendingRequests, visit => visit.id !== action.payload.visit.id),
				errors: { }
			};
		case REJECT_VISIT_REQUEST_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};
		case FETCH_VISIT_ACCEPTED_REQUESTS_SUCCESS:
			return {
				...state,
				acceptedRequests: action.payload.acceptedRequests,
				errors: { }
			};
		case FETCH_VISIT_ACCEPTED_REQUESTS_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};
		default:
			return {
				...state
			};
	}
};

export default visitReducer;