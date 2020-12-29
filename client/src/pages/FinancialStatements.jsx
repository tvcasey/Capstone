import React from 'react';
import IncomeStatement from '../components/IncomeStatement';
import BalanceSheet from '../components/BalanceSheet';
import CashFlows from '../components/CashFlows';



const FinancialStatements = ( props ) => {




    return (
        <div className='statements'>
            <div style={{height: '0px', width: '500px'}}>
            <IncomeStatement />
            <BalanceSheet />
            <CashFlows />
            </div>
        </div>
        


    



    )
}




export default FinancialStatements;