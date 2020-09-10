import React from 'react';
import Modal from 'react-modal';

export default function OptionModal({ selectedOption, handleCloseModal }) {
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel='Selected Option'
      onRequestClose={handleCloseModal}
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={handleCloseModal}>close</button>
    </Modal>
  );
}
