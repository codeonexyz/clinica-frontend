import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	FETCH_DOCTORS_START,
} from "../actions";
import {
	fetchDoctorsSuccess,
	fetchDoctorsFailure,
} from "./actions";
import instance from "../../helpers/instance";

const getDoctorsAsync = async () => {
	return await instance.get("/api/doctors")
		.then(resp => ({ doctors: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchDoctors() {
	try {
		let resp = yield call(getDoctorsAsync);
		if (resp && resp.doctors ) {
			yield put(fetchDoctorsSuccess(resp.doctors));
		}
		if (resp && resp.errors ) yield put(fetchDoctorsFailure(resp.errors));
	} catch (errors) { }
}

export function* watchFetchDoctorsStart() {
	yield takeEvery(FETCH_DOCTORS_START, fetchDoctors);
}

export default function* rootSaga() {
	yield all([
		fork(watchFetchDoctorsStart),
	]);
}