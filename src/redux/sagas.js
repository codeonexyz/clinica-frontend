import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import profileSaga from "./profile/saga";
import doctorSaga from "./doctor/saga";
import visitSaga from "./visit/saga";

export default function* rootSaga(getState) {
    yield all([
    	authSaga(),
    	profileSaga(),
    	doctorSaga(),
    	visitSaga()
    ]);
}
