import React, { useState } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions";
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	CardTitle,
	CardText,
	Button,
} from "reactstrap";
import formUser from "../../../assets/images/users/8.jpg";
import "./style.css";
import classnames from "classnames";
import _ from "lodash";

const DoctorAboutTabpane = React.lazy(() => import("../../../components/doctor-about-tabpane"));
const DoctorMyPatientsTabpane = React.lazy(() => import("../../../components/doctor-mypatients-tabpane"))
const DoctorSettingsTabpane = React.lazy(() => import("../../../components/doctor-settings-tabpane"));
const ChangePasswordTabpane = React.lazy(() => import("../../../components/changepassword-tabpane"));

const Profile = props => {

	const { authUser, profile, logoutUser } = props;

	const [activeTab, setActiveTab] = useState("mypatients");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<Container>
			<Card className="profile">
				<CardHeader>
					<img className="img img-thumbnail profile-img" src={formUser} />
					<h5 className="profile-name">{`${profile.firstName} ${profile.lastName}`}</h5>
					<ul className="profile-info">
						<li><i className="icon-envelope mr-2"/>{profile.email}</li>
						<li><i className="icon-chemistry mr-2"/>{profile.specialty}</li>
					</ul>
					{(!_.isNull(authUser) && !_.isNull(profile) && authUser.uid !== profile.uid && authUser.role === "ROLE_PATIENT") ? 
						<Button color="primary" size="sm" className="visit-request-btn">
							<i className="icon-share-alt mr-2"/>Visit Request
						</Button>
					 : "" }

					{(!_.isNull(authUser) && !_.isNull(profile) && authUser.uid === profile.uid) ? 
						<Button 
							color="primary" 
							size="sm" 
							className="profile-logout-btn"
							onClick={logoutUser}
						>
							<i className="icon-logout mr-2"/>Log Out
						</Button>
					 : "" }
				</CardHeader>
				<CardBody>

					<Nav tabs>
						<NavItem className="first-item">
							<NavLink
								className={classnames({ active: activeTab === "about"})}
								onClick={() => toggle("about")}
							>
								<i className="icon-home mr-2"/>About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === "mypatients"})}
								onClick={() => toggle("mypatients")}
							>
								<i className="icon-people mr-2"/>My Patients
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === "settings"})}
								onClick={() => toggle("settings")}
							>
								<i className="icon-settings mr-2"/>Settings
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === "changepassword"})}
								onClick={() => toggle("changepassword")}
							>
								<i className="icon-lock mr-2"/>Change Password
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
						<DoctorAboutTabpane tabId="about" />
						<DoctorMyPatientsTabpane tabId="mypatients" />
						<DoctorSettingsTabpane tabId="settings" />
						<ChangePasswordTabpane tabId="changepassword" />
					</TabContent>
				</CardBody>
			</Card>
		</Container>
	);
};

/*const mapStateToProps = ({ auth }) => {
	const { user: authUser } = auth;
	return { authUser };
};*/

const mapActionsToProps = dispatch => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(null, mapActionsToProps)(Profile);