import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	registerUserStart
} from "../../../redux/actions";
import {
	FormikInput,
	FormikRadioButtons,
	FormikCheckbox,
} from "../../../components/formik-controls";
import {
	Row,
	Col,
	Container,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter
} from "reactstrap";
import * as Yup from "yup";
import _ from "lodash";

const Register = (props) => {

	const initialValues = {
		firstName: "",
		lastName: "",
		gender: "",
		insured: [],
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("Required!"),
		lastName: Yup.string().required("Required!"),
		gender: Yup.string().required("Required!"),
		insured: Yup.array(),
		email: Yup.string().email("Invalid email format").required("Required!"),
		password: Yup.string().required("Required!").min(6).max(255),
	});

	const onSubmit = values => {
		const {
			registerUserStart,
			history
		} = props;

		const user = {
			firstName: values.firstName,
			lastName: values.lastName,
			gender: values.gender,
			insured: _.isEmpty(values.insured) ? false : true,
			login: {
				email: values.email,
				password: values.password,
			}
		}

		registerUserStart(user, "patient", history);
	};

	return (
		<Container>
			<Card>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{formik => (
						<Form>
							<CardHeader><h4>Patient Registration</h4></CardHeader>
							<CardBody>
								<Row>
									<Col><FormikInput type="text" name="firstName" label="First name" /></Col>
									<Col><FormikInput type="text" name="lastName" label="Last name" /></Col>
								</Row>
								<Row>
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
									<Col>
										<FormikCheckbox
											name="insured"
											label="Insured?"
											options={[
												{key: "Insured", value: "insured"}
											]}
										/>
									</Col>
								</Row>
								<Row>
									<Col><FormikInput type="email" name="email" label="Email" /></Col>
									<Col><FormikInput type="password" name="password" label="Password" /></Col>
								</Row>
							</CardBody>
							<CardFooter className="text-right">
								<Button type="sumbit" color="primary">Register</Button>
							</CardFooter>
						</Form>
					)}
				</Formik>
			</Card>
			<div style={{color: "#fff"}} className="text-center mt-2">Already have an account? <Link to="/login">login</Link></div>
		</Container>
	);
};

const mapActionsToProps = (dispatch) => ({
	registerUserStart: (user, role, history) => dispatch(registerUserStart(user, role, history)),
});

export default connect(null, mapActionsToProps)(Register);