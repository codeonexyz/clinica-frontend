import React from "react";
import { Formik, Form } from "formik";
import { FormikInput, FormikCheckbox, FormikRadioButtons } from "../formik-controls";
import {
	Row,
	Col,
	Table,
	Button,
	TabPane,
} from "reactstrap";
import * as Yup from "yup";
import "./style.css";

const PatientSettingsTabPane = (props) => {
	const {
		tabId
	} = props;

	const initialValues = {
		firstName: "",
		middleName: "",
		lastName: "",
		dateOfBirth: "",
		weight: "",
		height: "",
		homePhone: "",
		workPhone: "",
		cellMobilePhone: "",
		address: "",
		insured: [],
		gender: "",
		nationalCode: "",
		otherDetails: ""
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required(),
		middleName: Yup.string(),
		lastName: Yup.string().required(),
		dateOfBirth: Yup.date(),
		weight: Yup.number(),
		height: Yup.number(),
		homePhone: Yup.string(),
		workPhone: Yup.string(),
		cellMobilePhone: Yup.string(),
		address: Yup.string(),
		insured: Yup.array().required(),
		gender: Yup.string().required(),
		nationalCode: Yup.string(),
		otherDetails: Yup.string().max(255)
	});

	const onSubmit = values => {
		console.log(values);
	};

	return (
		<TabPane tabId={tabId}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{formik => (
					<Form>
						<Row>
							<Col><FormikInput type="text" name="firstName" label="First Name" /></Col>
							<Col><FormikInput type="text" name="middleName" label="Middle Name" placeholder="Optional" /></Col>
							<Col><FormikInput type="text" name="lastName" label="Last Name" /></Col>
						</Row>
						<Row>
							<Col><FormikInput type="date" name="dateOfBirth" label="Date Of Birth" /></Col>
							<Col><FormikInput type="text" name="weight" label="Weight" placeholder="Kg" /></Col>
							<Col><FormikInput type="text" name="height" label="Height" placeholder="Cm" /></Col>
						</Row>
						<Row>
							<Col><FormikInput type="text" name="homePhone" label="Home Phone" /></Col>
							<Col><FormikInput type="text" name="workPhone" label="Work Phone" /></Col>
							<Col><FormikInput type="text" name="cellMobilePhone" label="Cell Mobile Phone" /></Col>
						</Row>
						<Row>
							<Col><FormikInput type="text" name="address" label="Address" /></Col>
							<Col>
								<FormikCheckbox
									name="insured"
									label="Insured?"
									options={[
										{key: "Insured", value: "insured"}
									]}
								/>
							</Col>
							<Col>
								<FormikRadioButtons 
									name="gender" 
									label="Gender"
									options={[
										{key: "Male", value: "male"},
										{key: "Female", value: "female"}
									]}
								/>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<FormikInput type="text" name="nationalCode" label="National Code" />
							</Col>
							<Col>
								<FormikInput type="textarea" name="otherDetails" label="Other Details" />
							</Col>
						</Row>
						<div className="text-right">
							<Button color="primary" size="sm" type="submit">
								<i className="fa fa-save mr-2" />Save
							</Button>
						</div>
					</Form>
				)}	
			</Formik>
		</TabPane>
	);
};

export default PatientSettingsTabPane;