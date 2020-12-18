import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { FinancialChart } from 'react-chartjs-2';




function FinancialChart() {
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
  

  return (    
      <div className='FinancialChart'>
          <FinancialChart
            data={barData}
            options={barOptions} />
      </div>
      );
  }

  export default FinancialChart;