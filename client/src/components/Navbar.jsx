import React, { useState } from 'react';
import {
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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Financial Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to='/Blogdisplay'>Home
            {/* <NavItem>
              <NavLink href="/pages/Blogdisplay">Home</NavLink>
            </NavItem> */}
            </Link>
            {/* <NavItem>
              <NavLink href="/components/BalanceSheet">Balance Sheet</NavLink>
            </NavItem>   */}
            <Link to='/AddPost'>Add/Reply
            </Link>
            <Link to='/FinancialStatements'>Financial Statements
            </Link>
            {/* <NavItem>
              <NavLink href="/FinancialStatements">Cash Flows</NavLink>
            </NavItem>   */}
          </Nav>
          <NavbarText>Walk the Talk: Financial Blog</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;