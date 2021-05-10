import React, { useState } from 'react';
import { connect } from "react-redux";
import { toggleDoctorSearchModal } from "../../redux/actions";
import { 
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';
import DoctorDispCard from "../doctor-display-card";
import "./style.css";
import usersImg from "../../assets/images/users";
import _ from "lodash";

const DoctorSearchModal = (props) => {
  const {
    buttonLabel,
    className,
    toggleDoctorSearchModal,
    setVisitRequestModalData,
    isOpen,
    doctors
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchBy, setSearchBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const filterDoctor = (doctor) => {
    if (searchTerm === undefined) return true;

    const firstName = doctor.firstName.toLowerCase();
    const lastName = doctor.lastName.toLowerCase();
    const specialty = doctor.specialty.toLowerCase();

    if (searchBy === "name") {
      return firstName.startsWith(searchTerm) || firstName.endsWith(searchTerm) || firstName.includes(searchTerm) || lastName.startsWith(searchTerm) || lastName.endsWith(searchTerm) || lastName.includes(searchTerm);
    } else {
      return specialty.startsWith(searchTerm) || specialty.endsWith(searchTerm) || specialty.includes(searchTerm);
    }
  };

  return (
    <Modal className="doctor-search-modal" isOpen={isOpen} toggle={toggleDoctorSearchModal} className={className} size="lg">
      <ModalHeader toggle={toggleDoctorSearchModal}>
        <InputGroup>
          <Input 
            placeholder="Search..." 
            bssize="sm" 
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          <InputGroupButtonDropdown bssize="sm" addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret color="primary">
              by : {searchBy}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSearchBy("name")}>Name</DropdownItem>
              <DropdownItem onClick={() => setSearchBy("specialty")}>Specialty</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </ModalHeader>
      <ModalBody>
      { !_.isNull(doctors) && !_.isEmpty(doctors) && doctors.filter(doctor => filterDoctor(doctor)).map((doctor, idx) => <DoctorDispCard doctor={doctor} key={idx} img={usersImg["1jpg"]} /> )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleDoctorSearchModal}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggleDoctorSearchModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = ({ modal: { doctorSearch }, doctor }) => {
  const { isOpen } = doctorSearch;
  const { doctors } = doctor;
  return { isOpen, doctors };
};

const mapActionsToProps = dispatch => ({
  toggleDoctorSearchModal: () => dispatch(toggleDoctorSearchModal()),
});

export default connect(mapStateToProps, mapActionsToProps)(DoctorSearchModal);