/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Bar } from 'react-chartjs-2';


const ModalChart = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  {/*const BarChart = () => {
    const [barData, setBarData] = useState({
      labels: ['label 1', 'label 2', 'label 3', 'label 4'],
      datasets: [
        {
          label: 'test label',
          data: [
            48,
            35,
            73,
            82
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6'
          ],
          borderWidth: 3
        }
      ]
    });
    const [barOptions, setBarOptions] = useState({
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        title: {
          display: true,
          text: 'Data Organized In Bars',
          fontSize: 25
        },
        legend: {
          display: true,
          position: 'top'
        }
      }
    });
  }

  return (
    <Modal>    
      <div className='Bar'>
          <Bar
            data={chartData}
            options={options.options} />
      </div>
  </Modal>*/}


  return (
    <Modal>      
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size='xlg'>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <div className='Body'>
          
    
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
        </div>   
          <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    
    </Modal>
    </Modal>
    
  );
}

export default ModalChart;