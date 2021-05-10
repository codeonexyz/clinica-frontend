import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Loading from "../components/loading";

const PersonalProfileRoute = (props) => {
  const { 
    authUser,
    Profile,
    DoctorProfile,
    PatientProfile,
    ...rest
  } = props;

  return (
    <Route 
      {...rest}
      render={props => {
          if (localStorage.getItem("jwt") ) {
            if (authUser) {
              if (authUser.role === "ROLE_DOCTOR") return <DoctorProfile profile={authUser} authUser={authUser} {...props} />;
              else if (authUser.role === "ROLE_PATIENT") return <PatientProfile profile={authUser} authUser={authUser} {...props} />
            } else {
              return <Loading />
            }
          } else {
            return <Redirect to={ {pathname: "/login", state: {from: props.location} } } />
          }
        }
      }
    />
  );
};

export default PersonalProfileRoute;