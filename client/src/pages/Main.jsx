import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import App from './components/App';
//import Home from '/Home';
import AddPost from './AddPost';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Blogdisplay from './Blogdisplay';
import FinancialStatements from './FinancialStatements';
import ModalChart from '../components/ModalChart';

const Main = () => {
    
    return (
    <Switch>
        <Route exact path='/Blogdisplay' component={Blogdisplay}></Route>
        <Route exact path='/AddPost' component={AddPost}></Route>
        <Route exact path='/SignIn' component={SignIn}></Route>
        <Route exact path='/SignUp' component={SignUp}></Route>    
        {/*<Route exact path='/components/ModalChart' component={ModalChart}></Route>*/}
        <Route exact path='/FinancialStatements' component={FinancialStatements}></Route>
    </Switch>
    );
}

export default Main;
