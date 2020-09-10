import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

export default function OptionModal({ selectedOption, handleCloseModal }) {
  return (
    <Modal
      className='modal'
      overlayClassName='overlay'
      isOpen={!!selectedOption}
      contentLabel='Selected Option'
      onRequestClose={handleCloseModal}
    >
      <h3 className='modal-title'>Selected Option:</h3>
      {selectedOption && <p className='modal-option'>{selectedOption}</p>}
      <button className='modal-btn' onClick={handleCloseModal}>
        x
      </button>
    </Modal>
  );
}
