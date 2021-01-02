import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import App from './components/App';
//import Home from '/Home';
import AddPost from './AddPost';
import FinancialStatements from './FinancialStatements';
import DeletePost from '../components/DeletePost';
import ModalChart from '../components/ModalChart';

const Main = () => {
    
    return (
    <Switch>
        {/*<Route exact path='/' component={Home}></Route>*/}
        <Route exact path='/AddPost' component={AddPost}></Route>
        {/*<Route exact path='/DeletePost' component={DeletePost}></Route>
        <Route exact path='/ModalChart' component={ModalChart}></Route>*/}
        {/* <Route exact path='/FinancialStatements' component={FinancialStatements}></Route> */}
    </Switch>
    );
}

export default Main;
