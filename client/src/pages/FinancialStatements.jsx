import React from 'react';
import IncomeStatement from '../components/IncomeStatement';
import BalanceSheet from '../components/BalanceSheet';
import CashFlows from '../components/CashFlows';



const FinancialStatements = ( props ) => {




    return (
        <div className='statements'>
            <div> {/* style={{height: '1000px', width: '2000px'}}> */}
            <IncomeStatement />
            <BalanceSheet />
            <CashFlows />
            </div>
        </div>
        


    



    )
}




export default FinancialStatements;