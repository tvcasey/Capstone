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
              <button>Add/Reply</button>
            </Link>
            {/*<Link to='/ModalChart'>
              <Button color="btn btn-danger" onClick={toggle}>N.I. 5 yr Chart</Button>
          </Link>*/}
            {/* <NavItem>
              <NavLink href="/FinancialStatements">Cash Flows</NavLink>
            </NavItem>   */}
          </Nav>
          <NavbarText><h3>Walk the Talk: Financial Blog</h3></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;