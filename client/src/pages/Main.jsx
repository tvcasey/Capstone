import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import App from './components/App';
import Blogdisplay from './Blogdisplay';
import AddPost from './AddPost';
import FinancialStatements from './FinancialStatements';
import Delete from '../components/Delete';
import ModalChart from '../components/ModalChart';

const Main = () => {
    
    return (
    <Switch>
        <Route exact path='/Blogdisplay' component={Blogdisplay}></Route>
        <Route exact path='/AddPost' component={AddPost}></Route>
        <Route exact path='/Delete' component={Delete}></Route>
        <Route exact path='/ModalChart' component={ModalChart}></Route>
        {/* <Route exact path='/FinancialStatements' component={FinancialStatements}></Route> */}
    </Switch>
    );
}

export default Main;
