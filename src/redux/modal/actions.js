import { 
	TOGGLE_DOCTOR_SEARCH_MODAL,
	TOGGLE_VISIT_REQUEST_MODAL,
	SET_VISIT_REQUEST_MODAL_DATA,
	TOGGLE_DIAGNOSIS_CREATE_MODAL,
	SET_DIAGNOSIS_CREATE_MODAL_PATIENT,
} from "../actions";

export const toggleDoctorSearchModal = () => ({
	type: TOGGLE_DOCTOR_SEARCH_MODAL,
	payload: { }
});

export const toggleVisitRequestModal = () => ({
	type: TOGGLE_VISIT_REQUEST_MODAL,
	payload: { }
});

export const setVisitRequestModalData = (data) => ({
	type: SET_VISIT_REQUEST_MODAL_DATA,
	payload: { data }
});

export const toggleDiagnosisCreateModal = () => ({
	type: TOGGLE_DIAGNOSIS_CREATE_MODAL,
	payload: { }
});

export const setDiagnosisCreateModalPatient = (patient) => ({
	type: SET_DIAGNOSIS_CREATE_MODAL_PATIENT,
	payload: { patient }
});

