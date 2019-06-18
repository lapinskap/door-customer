import React from 'react';
import Modal from 'react-modal';

const ModalScreen = (props) => (
  <Modal
  // isOpen={this.state.isOpen}
  // onAfterOpen={this.afterOpenModal}
  // onRequestClose={this.closeModal}
  ariaHideApp={false}
//   style={customStyles}
  contentLabel="Example Modal"
>

  <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
  <div>I am a modal</div>
  <form>
    <input />
    <button>tab navigation</button>
    <button>stays</button>
    <button>inside</button>
    <button>the modal</button>
  </form>
</Modal>
 );


export default ModalScreen;