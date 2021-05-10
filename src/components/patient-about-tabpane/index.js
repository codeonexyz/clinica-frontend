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

const PatientAboutTabPane = (props) => {
	const {
		tabId
	} = props;

	return (
		<TabPane tabId={tabId}>
			<Table borderless>
				<tbody>
					<tr>
						<th>Full Name</th>
						<td>Martha K. Stevens</td>
					</tr>
					<tr>
						<th>Date Of Birth</th>
						<td>1995-05-04</td>
					</tr>
					<tr>
						<th>Gender</th>
						<td>Female</td>
					</tr>
					<tr>
						<th>National Code</th>
						<td>SF22-369</td>
					</tr>
					<tr>
						<th>Height</th>
						<td>172cm</td>
					</tr>
					<tr>
						<th>Weight</th>
						<td>102Kg</td>
					</tr>
					<tr>
						<th>Insured?</th>
						<td>Yes</td>
					</tr>
					<tr>
						<th>Address</th>
						<td>---</td>
					</tr>
					<tr>
						<th>Home Phone</th>
						<td>693325485</td>
					</tr>
					<tr>
						<th>Work Phone</th>
						<td>---</td>
					</tr>
					<tr>
						<th>Cell Mobile Phone</th>
						<td>22369985</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>martha.stevens@clinica.com</td>
					</tr>
					<tr>
						<th>Other Details</th>
						<td>This website is cool, it provides a great service arranging visits with doctors and all. It my favorite medication webiste of all time.</td>
					</tr>
				</tbody>
			</Table>
		</TabPane>
	);
};

export default PatientAboutTabPane;