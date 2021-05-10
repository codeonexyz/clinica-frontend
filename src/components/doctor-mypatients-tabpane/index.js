import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVisitAcceptedRequestsStart } from "../../redux/actions";
import DiagnosisCreateModal from "../diagnosis-create-modal";
import {
	Table,
	Button,
	TabPane,
	Row,
	Col,
} from "reactstrap";
import usersImg from "../../assets/images/users";
import PatientDisplayCard from "../patient-display-card";
import "./style.css";
import _ from "lodash";

const DoctorMyPatientsTabpane = (props) => {
	const {
		tabId,
		fetchVisitAcceptedRequestsStart,
		acceptedRequests,
	} = props;

	useEffect(() => {
		fetchVisitAcceptedRequestsStart();
	}, []);

	return (
		<TabPane tabId={tabId}>
			<DiagnosisCreateModal />
			{
				!_.isNull(acceptedRequests) && 
				!_.isEmpty(acceptedRequests) && 
				_.chunk(acceptedRequests, 3).map((row, idx) => <Row key={idx} className="mb-3">
						{row.map((visit, idx) => <Col key={idx} lg="4"><PatientDisplayCard  visit={visit} /></Col>)}
					</Row>
				)
			}
		</TabPane>
	);
};

const mapStateToProps = ({ visit }) => {
	const { acceptedRequests } = visit;
	return { acceptedRequests };
};

const mapActionsToProps = (dispatch) => ({
	fetchVisitAcceptedRequestsStart: () => dispatch(fetchVisitAcceptedRequestsStart()),
});

export default connect(mapStateToProps, mapActionsToProps)(DoctorMyPatientsTabpane);