import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


function CashFlows() {
    const [cash, setCash] = useState({annualReports: []});

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=FW76ULI2MV44V3PS')
            //.then(response => setIncome(response.data.total));
            .then(res => {
                console.log(res.data);
                setCash(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            console.log('Man I dont know if this thing is actually firing here???!!!');
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    return (
          <Table striped>
            {cash.annualReports.map((annualReports) => ( 
              <div key={annualReports.fiscalDateEnding}>
            <thead>
              <tr>
                <th>CASH FLOW</th>
                <th>{annualReports.fiscalDateEnding}(billions)</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Investment Cash Flows</th>
                <td>{annualReports.cashflowFromInvestment/1000000000}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Financing Cash Flows</th>
                <td>{annualReports.cashflowFromFinancing/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Change in Operating Activities</th>
                <td>{annualReports.changeInOperatingActivities/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Net Income</th>
                <td>{annualReports.netIncome/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Change in Cash</th>
                <td>{annualReports.changeInCash/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Operating Cash Flow</th>
                <td>{annualReports.operatingCashflow/1000000000}</td>  
              </tr>
              <br></br>
            </tbody>            
              </div>    
              ))}
    </Table>
            );
            }

export default CashFlows;
