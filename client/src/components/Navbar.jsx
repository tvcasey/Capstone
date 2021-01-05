import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalChart from './ModalChart';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/Blogdisplay">Financial Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <Link to='/Blogdisplay'>Home
              <NavItem>
              <NavLink href="/pages/Blogdisplay">Home</NavLink>
            </NavItem>
                </Link>*/}
            {/* <NavItem>
              <NavLink href="/components/BalanceSheet">Balance Sheet</NavLink>
            </NavItem>   */}
            <Link to='/AddPost'>
              <button className='btn btn-warning'>Add/Reply</button>
            </Link>
            <Link to='/SignIn'>
              <button className='btn btn-primary'>Login</button>
            </Link>
            <Link to='SignUp'>
              <button className='btn btn-info'>Sign Up</button>
            </Link>
            <Link to='FinancialStatements'>
              <button className='btn btn-secondary'>Financial Statements</button>
            </Link>
            {/*<Link to='/components/ModalChart'>
              <button classname='btn btn-success'>Net Income: 5 Years</button>
            </Link>*/}
            <Link>
              <ModalChart />
              {/*<Button color="btn btn-danger" onClick={toggle}>N.I. 5 yr Chart</Button>*/}
            </Link>
            {/* <NavItem>
              <NavLink href="/FinancialStatements">Cash Flows</NavLink>
            </NavItem>   */}
          </Nav>
          <NavbarText><h4>Walk the Talk: Financial Blog</h4></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;