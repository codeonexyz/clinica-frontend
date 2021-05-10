import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProfileStart, unsetProfile } from "../redux/actions";
import { Redirect, Route } from "react-router-dom";
import Loading from "../components/loading";
import _ from "lodash";

const ProfileRoute = (props) => {

  const [render, setRender] = useState(<Loading />);

  const { 
    authUser,
    DoctorProfile,
    PatientProfile,
    profile,
    ...rest
  } = props;

  useEffect(() => {
    const { id } = props.computedMatch.params;
    const { history, getProfileStart } = props;
    if (localStorage.getItem("jwt") && authUser) {
      getProfileStart(id);
    }
  }, [authUser]);

  useEffect(() => {
    if (!_.isNull(profile)) {
      if (profile.role === "ROLE_DOCTOR") {
        setRender(<DoctorProfile profile={profile} {...props} />)
      } else if (profile.role === "ROLE_PATIENT") {
        setRender(<PatientProfile profile={profile} {...props} />)
      }
    }
  }, [profile]);

  return (
    <Route 
      {...rest}
      render={props => {
          {if (localStorage.getItem("jwt") ) {
            return render;
          } else {
            return <Redirect to={ {pathname: "/login", state: {from: props.location} } } />
          }}
        }
      }
    />
  );
};

const mapStateToProps = ({ profile: userProfile }) => {
  const { profile } = userProfile;
  return { profile };
};

const mapActionsToProps = dispatch => ({
  getProfileStart: (id) => dispatch(getProfileStart(id)),
  unsetProfile: () => dispatch(unsetProfile())
});

export default connect(mapStateToProps, mapActionsToProps)(ProfileRoute);