import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserStart } from "../../redux/actions";
import { Formik, Form } from "formik";
import { FormikInput } from "../../components/formik-controls";
import {
	Container,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
} from "reactstrap";
import * as Yup from "yup";
import "./style.css";

const Login = (props) => {
	const initialValues = {
		email: "",
		password: ""
	};

	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email format").required("Required"),
		password: Yup.string().required("Required").min(6).max(255)
	});

	const onSubmit = values => {
		const {
			loginUserStart,
			history
		} = props;

		loginUserStart(values, history);
	};

	return (
		<Container>
			<Card className="login">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{formik => (
						<Form>
							<CardHeader><h4>Login</h4></CardHeader>
							<CardBody>
								<FormikInput type="email" name="email" label="Email" />
								<FormikInput type="password" name="password" label="Password" />
								
							</CardBody>
							<CardFooter className="text-right">
								<Button block type="submit" color="primary">Login</Button>
							</CardFooter>
						</Form>
					)}
				</Formik>
			</Card>
			<div style={{color: "#fff"}} className="text-center mt-2">Don't have an account? <Link to="/register">register</Link></div>
		</Container>
	);
};

const mapActionsToProps = dispatch =>({
	loginUserStart: (user, history) => dispatch(loginUserStart(user, history)),
});

export default connect(null, mapActionsToProps)(Login);