import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import usersImg from "../../assets/images/users";
import "./style.css";

const DiagnosisDispCard = props => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevStat => !prevStat);

	return (
		<Card className="diagnosis-disp-card mb-4">
			<CardHeader>
				<img className="img img-thumbnail" src={usersImg["1jpg"]} />
				<div className="doctor-to-patient">
					<span className="doctor-name">Matt Donavan</span>
					<i className="fa fa-caret-right mx-2 caret"/>
					<span className="patient-name">Matt Donavan</span>
				</div>
				<span className="date">2021-04-29 7:33 PM</span>

				<Dropdown direction="down" isOpen={dropdownOpen} toggle={toggle}>
		      <DropdownToggle 
		      	tag="span"
		        data-toggle="dropdown"
		        aria-expanded={dropdownOpen}
		      >
		        <i className="mdi mdi-dots-vertical"/>
		      </DropdownToggle>
		      <DropdownMenu right>
		        <DropdownItem header>Header</DropdownItem>
		        <DropdownItem>Some Action</DropdownItem>
		        <DropdownItem text>Dropdown Item Text</DropdownItem>
		        <DropdownItem disabled>Action (disabled)</DropdownItem>
		        <DropdownItem divider />
		        <DropdownItem>Foo Action</DropdownItem>
		        <DropdownItem>Bar Action</DropdownItem>
		        <DropdownItem>Quo Action</DropdownItem>
		      </DropdownMenu>
		    </Dropdown>
			</CardHeader>
			<CardFooter>
				<span className="mr-3"><i className="fa fa-comment-o" /> 16</span>
				<span className="mr-3"><i className="fa fa-file-image-o" /> 2</span>
				<span className="open-disgnosis-btn"><i className="icon-envelope-open"/> Open</span>
			</CardFooter>
		</Card>
	);
};

export default DiagnosisDispCard;