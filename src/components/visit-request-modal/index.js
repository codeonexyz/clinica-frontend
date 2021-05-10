import React, { useState } from 'react';
import { connect } from "react-redux";
import { toggleVisitRequestModal, visitRequestStart } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { FormikInput } from "../formik-controls";
import * as Yup from "yup";
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from 'reactstrap';
import _ from "lodash";

const VisitRequestModal = (props) => {
  const {
    className,
    toggleVisitRequestModal,
    visitRequestStart,
    isOpen,
    data
  } = props;

  const initialValues = {
    dateFrom: ""
  };

  const validationSchema = Yup.object({
    dateFrom: Yup.date().required("Please choose a date")
  });

  const onSubmit = values => {
    const visit = {
      doctor: {
        id: data.id
      },
      dateFrom: values.dateFrom,
    };

    visitRequestStart(visit);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggleVisitRequestModal} className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => <Form>
            <ModalHeader toggle={toggleVisitRequestModal}>Visit Request</ModalHeader>
            { !_.isNull(data) && <>
              <ModalBody>
                You are about to send a visit request to Dr. <strong><Link to={`/profile/${data.uid}`}>{`${data.firstName} ${data.lastName}`}</Link></strong>. Please choose the date of the visit: 
                <FormikInput type="date" name="dateFrom" label="Start Date" />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit" size="sm">
                  <i className="fa fa-send mr-2" />Send
                </Button>{' '}
                <Button color="secondary" size="sm" onClick={toggleVisitRequestModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </> }
            
          </Form>
        }
      </Formik>
    </Modal>
  );
}

const mapStateToProps = ({ modal }) => {
  const { isOpen, data } = modal.visitRequest;
  return { isOpen, data };
};

const mapActionsToProps = dispatch => ({
  toggleVisitRequestModal: () => dispatch(toggleVisitRequestModal()),
  visitRequestStart: (visit) => dispatch(visitRequestStart(visit)),
});

export default connect(mapStateToProps, mapActionsToProps)(VisitRequestModal);