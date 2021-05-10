import React from "react";
import { connect } from "react-redux";
import { toggleVisitRequestModal, setVisitRequestModalData } from "../../redux/actions";
import "./style.css";
import usersImg from "../../assets/images/users";
import { Button } from "reactstrap";

const DoctorDispCard = props => {
	const { doctor, img, toggleVisitRequestModal, setVisitRequestModalData } = props;

	return (
		<div className="doctor-disp-card">
			<img className="img img-thumbnail" src={img} />
			<span className="name">{`${doctor.firstName} ${doctor.lastName}`}</span>
			<span className="specialty">
				<i className="icon-chemistry mr-1" />{doctor.specialty}
			</span>
			<Button 
				color="primary" 
				className="visit-btn" 
				size="sm" 
				onClick={() => {
					toggleVisitRequestModal(); 
					setVisitRequestModalData(doctor);
				}
			}>
				<i className="icon-share-alt mr-1" />Request a Visit
			</Button>
		</div>
	);
};

const mapActionsToProps = dispatch => ({
	toggleVisitRequestModal: () => dispatch(toggleVisitRequestModal()),
	setVisitRequestModalData: (data) => dispatch(setVisitRequestModalData(data)),
});

export default connect(null, mapActionsToProps)(DoctorDispCard);