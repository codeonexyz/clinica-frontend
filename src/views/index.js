import React, { Suspense, Component } from "react";
import AppLayout from "../layout/AppLayout";
import Loading from "../components/loading";

const LoginView = React.lazy(() => import("./login"));
const DoctorRegisterView = React.lazy(() => import("./doctor/register"));
const PatientRegisterView = React.lazy(() => import("./patient/register"));
const DoctorProfileView = React.lazy(() => import("./doctor/profile"));
const PatientProfileView = React.lazy(() => import("./patient/profile"));

class Main extends Component {
  render() {
    return (
    	<AppLayout>
    		<Loading />
    	</AppLayout>
    );
  }
}

export default Main;