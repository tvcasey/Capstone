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

















        
    <Table borderless>

        {income.annualReports.map((annualReports) => ( 
                <div key={annualReports}>
                

      <thead>
        <tr>
          <th></th>
          <th>{annualReports.fiscalDateEnding}</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="col">Total Revenue</th>
          <td>{annualReports.totalRevenue/1000000000}</td>
          <td></td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">Total Operating Expense</th>
          <td>{annualReports.totalOperatingExpense/1000000000}</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/*{income.annualReports.map((annualReports) => ( 
                <div key={annualReports}>
            {annualReports.fiscalDateEnding}*/}
                {annualReports.totalRevenue}
                {annualReports.totalOperatingExpense}
                {annualReports.costOfRevenue}
                {annualReports.grossProfit}
                {annualReports.ebit}
                {annualReports.netIncome}
                {annualReports.fiscalDateEnding}

            </div>    
    
            
            ))}
    </Table>
            );
            }

export default IncomeStatement;



{/*import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;*/}