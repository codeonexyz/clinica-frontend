import { all, call, fork, put, takeEvery} from "redux-saga/Effects";
import {
	VISIT_REQUEST_START,
	FETCH_VISIT_PENDING_REQUESTS_START,
	ACCEPT_VISIT_REQUEST_START,
	REJECT_VISIT_REQUEST_START,
	FETCH_VISIT_ACCEPTED_REQUESTS_START,
} from "../actions";
import {
	visitRequestSuccess,
	visitRequestFailure,
	fetchVisitPendingRequestsSuccess,
	fetchVisitPendingRequestsFailure,
	acceptVisitRequestSuccess,
	acceptVisitRequestFailure,
	rejectVisitRequestSuccess,
	rejectVisitRequestFailure,
	fetchVisitAcceptedRequestsSuccess,
	fetchVisitAcceptedRequestsFailure,
} from "./actions";
import instance from "../../helpers/instance";
import _ from "lodash";

/* VISIT_REQUEST_START */
const visitRequestAsync = async (visit) => {
	return await instance.post("/api/visits", visit)
		.then(resp => ({ message: "Request sent" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* visitRequest({ payload }) {
	const { visit } = payload;
	try {
		let resp = yield call(visitRequestAsync, visit);
		if (resp && resp.message) yield put(visitRequestSuccess(resp.message));
		if (resp && resp.errors) yield put(visitRequestFailure(resp.errors));
	} catch(errors) { }
}

export function* watchVisitRequestStart() {
	yield takeEvery(VISIT_REQUEST_START, visitRequest);
}

/* FETCH_VISIT_REQUESTS_START */
const fetchVisitPendingRequestsAsync = async () => {
	return await instance.get("/api/visits/?status=pending")
		.then(resp => ({ pendingRequests: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchVisitPendingRequests({ payload }) {
	try {
		let resp = yield call(fetchVisitPendingRequestsAsync);
		if (resp && resp.pendingRequests) yield put(fetchVisitPendingRequestsSuccess(resp.pendingRequests));
		if (resp && resp.errors) yield put(fetchVisitPendingRequestsFailure(resp.errors));
	} catch (error) { }
}

export function* watchFetchVisitPendingRequestsStart() {
	yield takeEvery(FETCH_VISIT_PENDING_REQUESTS_START, fetchVisitPendingRequests);
}
/* ACCEPT_VISIT_REQUEST_START */
const acceptVisitRequestAsync = async (id) => {
	return await instance.put(`/api/visits/${id}/?status=accepted`)
		.then(resp => ({ visit: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* acceptVisitRequest({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(acceptVisitRequestAsync, id);
		if (resp && resp.visit) yield put(acceptVisitRequestSuccess(resp.visit));
		if (resp && resp.errors) yield put(acceptVisitRequestFailure(resp.errors));
	} catch (error) { }
}

export function* watchAcceptVisitRequestStart() {
	yield takeEvery(ACCEPT_VISIT_REQUEST_START, acceptVisitRequest);
};

/* REJECT_VISIT_REQUEST_START */
const rejectVisitRequestAsync = async (id) => {
	return await instance.put(`/api/visits/${id}/?status=rejected`)
		.then(resp => ({ visit: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* rejectVisitRequest({ payload }) {
		const { id } = payload;
		try {
			let resp = yield call(rejectVisitRequestAsync, id);
			if (resp && resp.visit) yield put(rejectVisitRequestSuccess(resp.visit));
			if (resp && resp.errors) yield put(rejectVisitRequestFailure(resp.errors));
		} catch (errors) { }
}

export function* watchRejectVisitRequestStart() {
	yield takeEvery(REJECT_VISIT_REQUEST_START, rejectVisitRequest);
};

/* FETCH_VISIT_ACCEPTED_REQUESTS_START */
const fetchVisitAcceptedRequestsAsync = async () => {
	return await instance.get("/api/visits/?status=accepted")
		.then(resp => ({ acceptedRequests: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchVisitAcceptedRequests() {
	try {
		let resp = yield call(fetchVisitAcceptedRequestsAsync);
		if (resp && resp.acceptedRequests) yield put(fetchVisitAcceptedRequestsSuccess(resp.acceptedRequests));
		if (resp && resp.errors) yield put(fetchVisitAcceptedRequestsFailure(resp.errors));
	} catch (error) { }
}

export function* watchFetchVisitAcceptedRequestsStart() {
	yield takeEvery(FETCH_VISIT_ACCEPTED_REQUESTS_START, fetchVisitAcceptedRequests);
}

export default function* rootSaga() {
	yield all([
		fork(watchVisitRequestStart),
		fork(watchFetchVisitPendingRequestsStart),
		fork(watchAcceptVisitRequestStart),
		fork(watchRejectVisitRequestStart),
		fork(watchFetchVisitAcceptedRequestsStart),
	]);
}