import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';


function BalanceSheet() {
    const [balance, setBalance] = useState({annualReports: []});

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=FW76ULI2MV44V3PS')
            //.then(response => setIncome(response.data.total));
            .then(res => {
                console.log(res.data);
                setBalance(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            console.log('Man I dont know if this thing is actually firing here???!!!');
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
    return (
      <Table striped>
          <div>
            {balance.annualReports.map((annualReports) => ( 
            <div key={annualReports.fiscalDateEnding}>
                <thead>
                  <tr>
                    <th>BALANCE SHEET</th>
                    <br></br>  
                    {/*<th>FISCAL YEAR(in billions)</th>*/}
                    <th>{annualReports.fiscalDateEnding}(billions)</th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">Total Assets</th>
                    <br></br>
                    <td>{annualReports.totalAssets/1000000000}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Total Liabilities</th>
                    <br></br>
                    <td>{annualReports.totalLiabilities/1000000000}</td>  
                  </tr>
                  <tr>
                    <th scope="row">Total Shareholder Equity</th>
                    <br></br>
                    <td>{annualReports.totalShareholderEquity/1000000000}</td>  
                  </tr>
                  <br></br>            
                </tbody>            
            </div>    
                ))}
          </div>
      </Table>
            );
            }

export default BalanceSheet;
