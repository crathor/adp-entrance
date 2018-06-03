import React, { Component } from 'react';
import './Modal.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from './Backdrop/Backdrop';

class Modal extends Component {
  componentDidMount(){
    setTimeout(() =>{
      console.log('done');
      this.props.modalClosed();
    }, 2000);
  }
  render(){
    return(
      <Wrapper>
        <Backdrop show={this.props.show}/>
        <div className='Modal'
        style={
          {
            transform: this.props.show ? 'scale(1)' : 'scale(0)',
            opacity: this.props.show ? '1' : '0'
          }
        }>
        {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

export default Modal;
