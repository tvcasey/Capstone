import React from 'react';
import IncomeStatement from '../components/IncomeStatement';
import BalanceSheet from '../components/BalanceSheet';
import CashFlows from '../components/CashFlows';



const FinancialStatements = ( props ) => {




    return (
        <div className='statements'>
            <IncomeStatement />
            <BalanceSheet />
            <CashFlows />
        </div>
        


    



    )
}




export default FinancialStatements;