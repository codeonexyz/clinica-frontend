import React, { useState } from "react";
import { connect } from "react-redux";
import { 
	toggleDiagnosisCreateModal,
	setDiagnosisCreateModalPatient 
} from "../../redux/actions";
import {
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";
import usersImg from "../../assets/images/users";

const PatientDisplayCard = props => {
	const {
		visit,
		toggleDiagnosisCreateModal,
		setDiagnosisCreateModalPatient
	} = props;

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevStat => !prevStat);

	return (
		<div className="patient-disp-card">
			<img className="img img-thumbnail" src={usersImg["5jpg"]} />
			<Link to="/profile/1" className="name">{visit && `${visit.patient.firstName} ${visit.patient.lastName}`}</Link>
			<span className="visit-date">
				<i className="icon-calender mr-1"/>2021-27-04 02:23:00 PM
			</span>
			{/*<Button color="success view-diagnosis-btn" size="sm">
				<i className="fa fa-eye mr-2"/>Diagnosis
			</Button>
			<Button color="primary visit-profile-btn" size="sm">
				<i className="fa fa-share mr-2"/>Visit Profile
			</Button>*/}

			<Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
	      <DropdownToggle 
	      	tag="span"
	        data-toggle="dropdown"
	        aria-expanded={dropdownOpen}
	      >
	        <i className="mdi mdi-dots-vertical"/>
	      </DropdownToggle>
	      <DropdownMenu right>
	        <DropdownItem onClick={() => {
	        	toggleDiagnosisCreateModal();
	        	setDiagnosisCreateModalPatient(visit.patient);
	        }}>
	        	Create Diagnosis
	        </DropdownItem>
	        <DropdownItem>View Diagnoses</DropdownItem>
	        <DropdownItem>Patient Info</DropdownItem>
	        <DropdownItem divider />
	        <DropdownItem>Transfert</DropdownItem>
	        <DropdownItem>Terminate Visit</DropdownItem>
	        <DropdownItem>Delete</DropdownItem>
	      </DropdownMenu>
	    </Dropdown>
		</div>
	);
};

const mapActionsToProps = dispatch => ({
	toggleDiagnosisCreateModal: () => dispatch(toggleDiagnosisCreateModal()),
	setDiagnosisCreateModalPatient: (patient) => dispatch(setDiagnosisCreateModalPatient(patient)),
});

export default connect(null, mapActionsToProps)(PatientDisplayCard);