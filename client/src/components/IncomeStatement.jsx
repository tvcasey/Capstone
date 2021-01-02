import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';



function IncomeStatement() {
    const [income, setIncome] = useState({annualReports: []});

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=FW76ULI2MV44V3PS')
            //.then(response => setIncome(response.data.total));
            .then(res => {
                console.log(res.data);
                setIncome(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            console.log('Man I dont know if this thing is actually firing here???!!!');
            
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    return (
          <Table striped>            
              {income.annualReports.map((annualReports) => ( 
            <div key={annualReports.fiscalEndingDate}>
            <thead>
              <tr>
                <th>INCOME STATEMENT</th>
                <th>{annualReports.fiscalDateEnding}(billions)</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Total Revenue</th>
                <td>{annualReports.totalRevenue/1000000000}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Total Operating Expense</th>
                <td>{annualReports.totalOperatingExpense/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Cost of Revenue</th>
                <td>{annualReports.costOfRevenue/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Gross Profit</th>
                <td>{annualReports.grossProfit/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Ebit</th>
                <td>{annualReports.ebit/1000000000}</td>  
              </tr>
              <tr>
                <th scope="row">Net Income</th>
                <td>{annualReports.netIncome/1000000000}</td>  
              </tr>
              <br></br>
            </tbody>            
                  </div>    
                  ))}
          </Table>
          
          );
      }
            
export default IncomeStatement;
