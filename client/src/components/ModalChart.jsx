/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FinancialChart from './FinancialChart';
import {Line} from 'react-chartjs-2';
//import Pages from './pages/Pages';
import './Components.css';

const ModalChart = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='example'>
      <Button color="btn btn-success" onClick={toggle}>N.I. 5 yr Chart</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className} size='lg'>
        <ModalHeader toggle={toggle}>Net Income(in billions) 12/31/15 - 12/31/19 (chart below)</ModalHeader>
        <ModalBody className='dimensions'>
        <FinancialChart/>
      

      
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalChart;
