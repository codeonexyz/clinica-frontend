import {
	VISIT_REQUEST_START,
	VISIT_REQUEST_SUCCESS,
	VISIT_REQUEST_FAILURE,
	FETCH_VISIT_PENDING_REQUESTS_START,
	FETCH_VISIT_PENDING_REQUESTS_SUCCESS,
	FETCH_VISIT_PENDING_REQUESTS_FAILURE,
	ACCEPT_VISIT_REQUEST_START,
	ACCEPT_VISIT_REQUEST_SUCCESS,
	ACCEPT_VISIT_REQUEST_FAILURE,
	REJECT_VISIT_REQUEST_START,
	REJECT_VISIT_REQUEST_SUCCESS,
	REJECT_VISIT_REQUEST_FAILURE,
	FETCH_VISIT_ACCEPTED_REQUESTS_START,
	FETCH_VISIT_ACCEPTED_REQUESTS_SUCCESS,
	FETCH_VISIT_ACCEPTED_REQUESTS_FAILURE,
} from "../actions";

export const visitRequestStart = (visit) => ({
	type: VISIT_REQUEST_START,
	payload: { visit }
});

export const visitRequestSuccess = (message) => ({
	type: VISIT_REQUEST_SUCCESS,
	payload: { message }
});

export const visitRequestFailure = (errors) => ({
	type: VISIT_REQUEST_FAILURE,
	payload: { errors }
});

export const fetchVisitPendingRequestsStart = () => ({
	type: FETCH_VISIT_PENDING_REQUESTS_START,
	payload: { }
});

export const fetchVisitPendingRequestsSuccess = (pendingRequests) => ({
	type: FETCH_VISIT_PENDING_REQUESTS_SUCCESS,
	payload: { pendingRequests }
});

export const fetchVisitPendingRequestsFailure = (errors) => ({
	type: FETCH_VISIT_PENDING_REQUESTS_FAILURE,
	payload: { errors }
});

export const acceptVisitRequestStart = (id) => ({
	type: ACCEPT_VISIT_REQUEST_START,
	payload: { id }
});

export const acceptVisitRequestSuccess = (visit) => ({
	type: ACCEPT_VISIT_REQUEST_SUCCESS,
	payload: { visit }
});

export const acceptVisitRequestFailure = (errors) => ({
	type: ACCEPT_VISIT_REQUEST_FAILURE,
	payload: { errors }
});

export const rejectVisitRequestStart = (id) => ({
	type: REJECT_VISIT_REQUEST_START,
	payload: { id }
});

export const rejectVisitRequestSuccess = (visit) => ({
	type: REJECT_VISIT_REQUEST_SUCCESS,
	payload: { visit }
});

export const rejectVisitRequestFailure = (errors) => ({
	type: REJECT_VISIT_REQUEST_FAILURE,
	payload: { errors }
});

export const fetchVisitAcceptedRequestsStart = () => ({
	type: FETCH_VISIT_ACCEPTED_REQUESTS_START,
	payload: { }
});

export const fetchVisitAcceptedRequestsSuccess = (acceptedRequests) => ({
	type: FETCH_VISIT_ACCEPTED_REQUESTS_SUCCESS,
	payload: { acceptedRequests }
});

export const fetchVisitAcceptedRequestsFailure = (errors) => ({
	type: FETCH_VISIT_ACCEPTED_REQUESTS_FAILURE,
	payload: { errors }
});
