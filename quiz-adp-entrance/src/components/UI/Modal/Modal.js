import React from 'react';
import './Modal.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from './Backdrop/Backdrop';

const Modal = ( props ) => {
  return (
    <Wrapper>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className='Modal'
          style={
            {
              transform: props.show ? 'scale(1)' : 'scale(0)',
              opacity: props.show ? '1' : '0'
            }
          }>
      {props.children}
    </div>
    </Wrapper>
  );
};

export default Modal;
