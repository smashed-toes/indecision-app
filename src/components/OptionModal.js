import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleOkay}
        contentLabel="Selected Option"
        //effects how long before ripped out of dom, allows us to use before close in scss
        closeTimeoutMS={2000}
        //overides any auto styling
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleOkay}>Okay</button>
    </Modal>
);

export default OptionModal;