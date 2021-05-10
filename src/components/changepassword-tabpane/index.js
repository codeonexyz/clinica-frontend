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
import "./style.css";

const ChangePasswordTabPane = (props) => {
	const {
		tabId
	} = props;

	const initialValues = {
		currentPassword: "",
		newPassword: "",
		confirmNewPassword: ""
	};

	const validationSchema = Yup.object({
		currentPassword: Yup.string().required(),
		newPassword: Yup.string().required(),
		confirmNewPassword: Yup.string().required()
	});

	const onSubmit = values => {
		console.log("Form data", values);
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
							<Col><FormikInput type="password" name="currentPassword" label="Current Password" /></Col>
							<Col><FormikInput type="password" name="newPassword" label="New Password" /></Col>
							<Col><FormikInput type="password" name="confirmNewPassword" label="Confirm New Password" /></Col>
						</Row>
						<div className="text-right">
							<Button color="primary" type="submit" size="sm">
								<i className="fa fa-send mr-2" />Submit 
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</TabPane>
	);
};

export default ChangePasswordTabPane;