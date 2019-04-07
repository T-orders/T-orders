import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function TorderModal(props) {
  return (
    <div id="torder-compute">
      <Button
        variant="primary"
        className="torder-primary-btn"
        onClick={props.toggleModal}
        style={{ marginBottom: '2em' }}>
        <span>Compute T-order</span>
      </Button>
      <Modal
        show={props.showModal}
        onHide={props.toggleModal}
        keyboard={false}
        backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Compute T-order</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button className="torder-primary-btn" onClick={props.toggleModal}>
            Cancel
          </Button>
          <Button
            form="compute-form"
            variant="primary"
            className="torder-primary-btn"
            onClick={() => {
              props.submitTorderRequest(
                document.getElementById('compute-form')
              );
            }}>
            <span>Submit</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TorderModal;
