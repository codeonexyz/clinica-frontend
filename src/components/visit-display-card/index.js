import React, { useState, useEffect } from "react";
import usersImg from "../../assets/images/users";
import { connect } from "react-redux";
import { 
	acceptVisitRequestStart, 
	rejectVisitRequestStart
} from "../../redux/actions";
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./style.css";
import _ from "lodash";

const VisitDisplayCard = (props) => {

	const { 
		authUser, 
		visitRequest, 
		acceptVisitRequestStart,
		rejectVisitRequestStart
	} = props;

	const [dropdownOpen, setDropdownOpen] = useState(false);

	const [cardContent, setCardContent] = useState(null);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
  	if (!_.isNull(authUser) && authUser.role === "ROLE_DOCTOR") {
  		setCardContent(<React.Fragment>
  			<img className="img img-thumbnail" src={usersImg["4jpg"]} />
				<span className="name">{`${visitRequest.patient.firstName} ${visitRequest.patient.lastName}`}</span>
  			<span className="date">
					<i className="icon-clock mr-1" />{visitRequest.dateFrom}
				</span>
  			<Button color="success" size="sm" className="btn-accept" onClick={() => acceptVisitRequestStart(visitRequest.id)}>
					<i className="fa fa-check mr-1" />Accept
				</Button>
				<Button color="danger" size="sm" className="btn-reject" onClick={() => rejectVisitRequestStart(visitRequest.id)}>
					<i className="fa fa-times mr-1" />Reject
				</Button>
  		</React.Fragment>)
  	}

  	if (!_.isNull(authUser) && authUser.role === "ROLE_PATIENT") {
  		setCardContent(<React.Fragment>
  			<img className="img img-thumbnail" src={usersImg["4jpg"]} />
  			<span className="name">Dr. Matt Donavan</span>
  			<span className="specialty">
					<i className="icon-chemistry mr-1" />Blood
				</span>
  			<Dropdown direction="down" isOpen={dropdownOpen} className="pending-dropdown" toggle={toggle}>
		      <DropdownToggle size="sm" caret>
		        <i className="icon-clock mr-2" />Pending...{'  '}
		      </DropdownToggle>
		      <DropdownMenu>
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
  		</React.Fragment>)
  	}  
	 }, [authUser]);

	return (
		<div className="visit-display-card">
			{cardContent}
		</div>
	);

};

const mapStateToProps = ({ auth }) => {
	const { user: authUser } = auth;
	return { authUser };
};

const mapActionsToProps = dispatch => ({
	acceptVisitRequestStart: (id) => dispatch(acceptVisitRequestStart(id)),
	rejectVisitRequestStart: (id) => dispatch(rejectVisitRequestStart(id)),
});

export default connect(mapStateToProps, mapActionsToProps)(VisitDisplayCard);