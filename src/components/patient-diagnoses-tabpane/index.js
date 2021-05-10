import React from "react";
import { Formik, Form } from "formik";
import { FormikInput } from "../formik-controls";
import {
	Row,
	Col,
	Table,
	Button,
	TabPane,
} from "reactstrap";
import * as Yup from "yup";
import DiagnosisDispCard from "../diagnosis-display-card";
import "./style.css";

const PatientDiagnonesTabPane = (props) => {
	const {
		tabId
	} = props;

	return (
		<TabPane tabId={tabId}>
			<Row>
				<Col lg="6"><DiagnosisDispCard /></Col>
				<Col lg="6"><DiagnosisDispCard /></Col>
			</Row>
			<Row>
				<Col lg="6"><DiagnosisDispCard /></Col>
			</Row>
		</TabPane>
	);
};

export default PatientDiagnonesTabPane;