import {
	FETCH_DOCTORS_START,
	FETCH_DOCTORS_SUCCESS,
	FETCH_DOCTORS_FAILURE,
} from "../actions";

export const fetchDoctorsStart = () => ({
	type: FETCH_DOCTORS_START,
	payload: { }
});

export const fetchDoctorsSuccess = (doctors) => ({
	type: FETCH_DOCTORS_SUCCESS,
	payload: { doctors }
});

export const fetchDoctorsFailure = (errors) => ({
	type: FETCH_DOCTORS_FAILURE,
	payload: { errors }
});