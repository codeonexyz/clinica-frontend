import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchVisitPendingRequestsStart } from "../../redux/actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge
} from 'reactstrap';
import VisitDisplayCard from "../visit-display-card";
import "./style.css";
import _ from "lodash";

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const visitRequestsRef = useRef();

  const toggle = () => setIsOpen(!isOpen);

  const { authUser, fetchVisitPendingRequestsStart, pendingRequests } = props;

  function loadVisitRequests(e) {
    if (!visitRequestsRef.current.state.isOpen) {
      fetchVisitPendingRequestsStart();
    }
  };

  return (
    <Navbar className="topnav" dark expand="md" fixed="top">
      <NavbarBrand href="/">
        <i className="mdi mdi-hospital-building" />Clinica
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Diagnoses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Medications</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/register/doctor" className="nav-link">Register-Doctor</Link>
          </NavItem>
          <NavItem>
            <Link to="/register/patient" className="nav-link">Register-Patient</Link>
          </NavItem>
          <NavItem>
            <Link to="/login" className="nav-link">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile" className="nav-link">Profile</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown ref={visitRequestsRef} className="notification visits-dropdown" nav inNavbar>
            <DropdownToggle nav onClick={(e) => loadVisitRequests(e)}>
              <i className="icon-user" />
              <Badge color="danger">1</Badge>
            </DropdownToggle>
            <DropdownMenu right>
              <i className="fa fa-caret-up"/>
              { !_.isNull(pendingRequests) && !_.isEmpty(pendingRequests) && pendingRequests.map((visit, idx) => <VisitDisplayCard key={idx} visitRequest={visit} />) }
              <DropdownItem divider />
              <a href="#" className="mr-2">accept all</a>
              <a href="#">reject all</a>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="notification" nav inNavbar>
            <DropdownToggle nav>
              <i className="icon-envelope" />
              <Badge color="danger">11</Badge>
            </DropdownToggle>
            <DropdownMenu right>
              <i className="fa fa-caret-up"/>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="notification" nav inNavbar>
            <DropdownToggle nav>
              <i className="icon-bell" />
              <Badge color="danger">2</Badge>
            </DropdownToggle>
            <DropdownMenu right>
              <i className="fa fa-caret-up"/>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Dr. John Doe</NavbarText>
      </Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ auth, visit }) => {
  const { user: authUser } = auth;
  const { pendingRequests } = visit;
  return { authUser, pendingRequests };
};

const mapActionsToProps = (dispatch) => ({
  fetchVisitPendingRequestsStart: () => dispatch(fetchVisitPendingRequestsStart()),
});

export default connect(mapStateToProps, mapActionsToProps)(Topnav);