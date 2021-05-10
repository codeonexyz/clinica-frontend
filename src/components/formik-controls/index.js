import React from "react";
import { 
	Field, 
	ErrorMessage,
	useField
} from "formik";
import {
	FormGroup,
	FormFeedback,
	Input,
	Label
} from "reactstrap";
import "./style.css";

export const FormikInput = ({ label, name, ...rest }) => {
	const [field, meta] = useField(name);
	return (
		<FormGroup>
			<label className="legend" htmlFor={name}>{label}</label>
			<Input 
				invalid={(meta.touched && meta.error ? true : false)}
				{...field} 
				{...rest} 
			/>
			{meta.touched && meta.error ? (
				<FormFeedback>{meta.error}</FormFeedback>
			) : null}
		</FormGroup>
	);
};

export const FormikSelect = ({ label, name, options, ...rest }) => {
	const [field, meta] = useField(name);
	return (
		<FormGroup>
			<label className="legend" htmlFor={name}>{label}</label>
			<Input
				type="select"
				invalid={(meta.touched && meta.error ? true : false)}
				{...field}
				{...rest}
			>
				{options.map(option => {
					return (
						<option key={option.value} value={option.value}>
							{option.key}
						</option>
					)
				})}
			</Input>
			{meta.touched && meta.error ? (
				<FormFeedback>{meta.error}</FormFeedback>
			) : null}
		</FormGroup>
	);
};

export const FormikRadioButtons = ({ name, label, options, ...rest }) => {
	const [field, meta] = useField(name);
	return (
		<FormGroup>
			<label className="legend">{label}</label>
			{options.map(option => (
				<FormGroup check key={option.value}>
					<Label check>
						<Input 
							type="radio" 
							{...field} 
							value={option.value} 
							checked={field.value === option.value}
						/>
						{option.key}
					</Label>
				</FormGroup>
			))}
			{meta.touched && meta.error ? (
				<FormFeedback style={{display: "block"}}>{meta.error}</FormFeedback>
			) : null}
		</FormGroup>
	);
};

export const FormikCheckbox = ({ name, label, options, ...rest }) => {
	const [field, meta] = useField(name);
	return (
		<FormGroup>
			<label className="legend">{label}</label>
			{options.map(option => (
				<FormGroup check key={option.key}>
					<Label check>
						<Input 
							type="checkbox"
							{...field}
							value={option.value}
							checked={field.value.includes(option.value)}
						/>
						{option.key}
					</Label>
				</FormGroup>
			))}
			{meta.touched && meta.error ? (
				<FormFeedback style={{display: "block"}}>{meta.error}</FormFeedback>
			) : null}
		</FormGroup>
	);
};

export const FormikControl = (props) => {
	const { control, ...rest } = props;
	switch(control) {
		case "input": return <FormikInput {...rest} />
		case "select": return <FormikSelect {...rest} />
		case "radio": return <FormikRadioButtons {...rest} />
		case "checkbox": return <FormikCheckbox {...rest} />
		default: return null;
	}
};

export default FormikControl;