import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUserStart } from "./redux/actions";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import AuthRoute from "./helpers/authRoute";
import ProfileRoute from "./helpers/profileRoute";
import PersonalProfileRoute from "./helpers/personalProfileRoute";
import AppLayout from "./layout/AppLayout";

const ViewMain = React.lazy(() => import("./views"));
const LoginView = React.lazy(() => import("./views/login"));
const DoctorRegisterView = React.lazy(() => import("./views/doctor/register"));
const PatientRegisterView = React.lazy(() => import("./views/patient/register"));
const DoctorProfileView = React.lazy(() => import("./views/doctor/profile"));
const PatientProfileView = React.lazy(() => import("./views/patient/profile"));

const App = props => {

  const { authUser, setCurrentUserStart } = props;

  useEffect(() => {
    setCurrentUserStart();
  }, []);

	return (
		<React.Fragment>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <AppLayout>
            <Switch>
              <PersonalProfileRoute
                path="/profile"
                exact
                authUser={authUser}
                DoctorProfile={DoctorProfileView}
                PatientProfile={PatientProfileView}
              />
              <ProfileRoute
                path="/profile/:id"
                exact
                authUser={authUser}
                DoctorProfile={DoctorProfileView}
                PatientProfile={PatientProfileView}
              />
              <Route
                path="/login"
                exact
                render={props => (<LoginView {...props} />)}
              />
              <Route
                path="/register/doctor"
                exact
                render={props => (<DoctorRegisterView {...props} />)}
              />
              <Route
                path="/register/patient"
                exact
                render={props => (<PatientRegisterView {...props} />)}
              />
              <Route
                path="/profile/doctor"
                exact
                render={props => (<DoctorProfileView {...props} />)}
              />
              <Route
                path="/profile/patient"
                exact
                render={props => (<PatientProfileView {...props} />)}
              />
              <Route
                path="/"
                exact
                render={props => (<ViewMain {...props} />)}
              />
              <Redirect to="/error" />
            </Switch>
          </AppLayout>
        </Router>
      </Suspense>
    </React.Fragment>
	);
}

const mapStateToProps = ({ auth }) => {
  const { user: authUser } = auth;
  return { authUser };
};

const mapActionsToProps = dispatch => ({
  setCurrentUserStart: () => dispatch(setCurrentUserStart())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
