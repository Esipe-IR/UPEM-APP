import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { rcvModal } from "../redux/actions";

class EventModal extends React.Component {
  close() {
    this.props.dispatch(rcvModal(false));
  }

  render() {
    return (
      <div>
        {this.props.modal ? (
          <Modal
            isOpen={this.props.modal ? true : false}
            toggle={this.close.bind(this)}
          >
            <ModalHeader toggle={this.close.bind(this)}>
              {this.props.modal.name}
            </ModalHeader>
            <ModalBody>
              <p>
                <b>Professeur:</b> {this.props.modal.instructor}
              </p>
              <p>
                <b>Salle:</b> {this.props.modal.classroom}
              </p>
              <p>
                <b>Date:</b> {this.props.modal.date}
              </p>
              <p>
                <b>Heure:</b> {this.props.modal.startHour} -{" "}
                {this.props.modal.endHour}
              </p>

              <p>
                <b>Classe:</b>
                {this.props.modal.class.map((c, i) => (
                  <span key={i}> {c}, </span>
                ))}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.close.bind(this)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { calendar_events } = state;

  return {
    modal: calendar_events.modal
  };
};

export default connect(mapStateToProps)(EventModal);
