import {
	GET_PROFILE_START,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAILURE,
	UNSET_PROFILE,
} from "../actions";

export const getProfileStart = (id) => ({
	type: GET_PROFILE_START,
	payload: { id }
});

export const getProfileSuccess = (profile) => ({
	type: GET_PROFILE_SUCCESS,
	payload: { profile }
});

export const getProfileFailure = (errors) => ({
	type: GET_PROFILE_FAILURE,
	payload: { errors }
});

export const unsetProfile = () => ({
	type: UNSET_PROFILE,
	payload: { }
});