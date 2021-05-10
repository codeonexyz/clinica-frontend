import React from 'react';
import { connect } from "react-redux";
import { toggleDiagnosisCreateModal } from "../../redux/actions";
import { Formik, Form } from "formik";
import { FormikInput, FormikSelect } from "../formik-controls";
import * as Yup from "yup";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import "./style.css";
import _ from "lodash";

const DiagnosisCreateModal = (props) => {
  const {
    buttonLabel,
    className,
    toggleDiagnosisCreateModal,
    isOpen,
    patient
  } = props;

  const initialValues = {
    drugs: [],
    otherDetails: ""
  };

  const validationSchema = Yup.object({
    drugs: Yup.array(),
    otherDetails: Yup.string()
  });

  const onSubmit = values => {
    console.log("Form data", values);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggleDiagnosisCreateModal} size="md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => <React.Fragment>
          <Form>
            <ModalHeader toggle={toggleDiagnosisCreateModal}>Create Diagnosis</ModalHeader>
            <ModalBody>
              <p>You are about to compose a diagonsis to{` `}
                <Link to={`/profile/${patient.uid}`}>
                  {!_.isNull(patient) && `${patient.firstName} ${patient.lastName}`}
                </Link>
              </p>
              <FormikInput type="textarea" name="otherDetails" label="Diagnosis Details" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" size="sm" onClick={toggleDiagnosisCreateModal}>
                Create
              </Button>{' '}
              <Button color="secondary" size="sm" onClick={toggleDiagnosisCreateModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </React.Fragment>}
      </Formik>
    </Modal>
  );
}

const mapStateToProps = ({ modal : { diagnosisCreate } }) => {
  const { isOpen, patient } = diagnosisCreate;
  return { isOpen, patient };
};

const mapActionsToProps = dispatch => ({
  toggleDiagnosisCreateModal: () => dispatch(toggleDiagnosisCreateModal()),
});

export default connect(mapStateToProps, mapActionsToProps)(DiagnosisCreateModal);