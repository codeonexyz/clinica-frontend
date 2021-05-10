import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	GET_PROFILE_START,
} from "../actions";
import {
	getProfileSuccess,
	getProfileFailure,
} from "./actions";
import instance from "../../helpers/instance";

const getProfileAsync = async (id) => {
	return await instance.get(`/api/profile/${id}`)
		.then(resp => ({ profile: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* getProfile({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(getProfileAsync, id);
		if (resp && resp.profile) yield put(getProfileSuccess(resp.profile));
		if (resp && resp.errors) {
			yield put(getProfileFailure(resp.errors));
			window.location.href = "/error";
		}
	} catch (error) { }
}

export function* watchGetProfileStart() {
	yield takeEvery(GET_PROFILE_START, getProfile);
}

export default function* rootSaga() {
	yield all([
		fork(watchGetProfileStart),
	]);
}