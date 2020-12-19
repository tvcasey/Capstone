import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import IncomeStatement from './IncomeStatement';


const FinancialChart = () => {
  const[chartData, setChartData] = useState([]);

  const chart = () => ({
    labels: ['12/31/15', '12/31/16', '12/31/17', '12/31/18', '12/31/19'],
    datasets: [
      {
        label: 'Net Income',
        data: [9.431, 8.728, 5.753, 11.872, 13.19],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 4
      }
    ]
  })


useEffect(() => {
  chart()
  axios.get('https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=FW76ULI2MV44V3PS')
            //.then(response => setIncome(response.data.total));
            .then(res => {
                console.log(res.data);
                setChartData(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            console.log('Man I dont know if this thing is actually firing here???!!!');
    }, [])

  return(
      
    <div className='Graph'>
      <h3>IBM</h3>
      <div style={{height: '500px', width: '500px'}}>
        <Line data={chart()} options={{
          responsive: true,
          title: {text: 'Annual Net Income(5 Years)', display: true},
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
              },
                gridlines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }}/>
      </div>
    </div>
     );
};

export default FinancialChart;