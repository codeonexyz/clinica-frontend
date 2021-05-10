import React, { useState } from "react";
import { connect,  } from "react-redux";
import { logoutUser, toggleDoctorSearchModal, fetchDoctorsStart } from "../../../redux/actions";
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
import patientImg from "../../../assets/images/users/6.jpg";
import DoctorSearchModal from "../../../components/doctor-search-modal";
import VisitRequestModal from "../../../components/visit-request-modal";
import "./style.css";
import classnames from "classnames";
import _ from "lodash";

const PatientAboutTabPane = React.lazy(() => import("../../../components/patient-about-tabpane"));
const PatientDiagnosesTabPane = React.lazy(() => import("../../../components/patient-diagnoses-tabpane"));
const PatientSettingsTabPane = React.lazy(() => import("../../../components/patient-settings-tabpane"));
const ChangePasswordTabPane = React.lazy(() => import("../../../components/changepassword-tabpane"));
const VisitsTabPane = React.lazy(() => import("../../../components/visits-tabpane"));

const Profile = props => {

	const {
		profile,
		authUser,
		logoutUser,
		toggleDoctorSearchModal,
		fetchDoctorsStart
	} = props;

	const [activeTab, setActiveTab] = useState("visits");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<Container>
			<VisitRequestModal />
			<DoctorSearchModal />
			<Card className="profile">
				<CardHeader>
					<img className="img img-thumbnail profile-img" src={patientImg} />
					<h5 className="profile-name">{`${profile.firstName} ${profile.lastName}`}</h5>
					<div className="joined-date">
						<i className="icon-clock mr-1" />Joined: 2021-25-04 12:02:13 PM
					</div>
					{(!_.isNull(profile) && !_.isNull(authUser) && profile.uid === authUser.uid) ? 
						<Button 
							color="primary" 
							size="sm" 
							className="find-doctors-btn"
							onClick={() => {
									toggleDoctorSearchModal();
									fetchDoctorsStart();
								}
							}
						>
							<i className="icon-people mr-2"/>Find Doctors
						</Button>
					 : "" }
					
					{(!_.isNull(profile) && !_.isNull(authUser) && profile.uid === authUser.uid) ?
						<Button 
							color="primary" 
							size="sm" 
							className="profile-logout-btn"
							onClick={logoutUser}
						>
							<i className="icon-logout mr-2"/>LOG OUT
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
								className={classnames({ active: activeTab === "mydiagnoses"})}
								onClick={() => toggle("mydiagnoses")}
							>
								<i className="icon-chart mr-2"/>My Diagnones
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({ active: activeTab === "visits"})}
								onClick={() => toggle("visits")}
							>
								<i className="icon-chart mr-2"/>Visits
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
						<PatientAboutTabPane tabId="about" />
						<PatientDiagnosesTabPane tabId="mydiagnoses" />
						<VisitsTabPane tabId="visits" />
						<PatientSettingsTabPane tabId="settings" />
						<ChangePasswordTabPane tabId="changepassword" />
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
	toggleDoctorSearchModal: () => dispatch(toggleDoctorSearchModal()),
	fetchDoctorsStart: () => dispatch(fetchDoctorsStart()),
});

export default connect(null, mapActionsToProps)(Profile);