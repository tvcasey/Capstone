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
            <NavItem>
              <NavLink href="/IncomeStatement">Income Statement</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/BalanceSheet">Balance Sheet</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink href="/components/CashFlows">Cash Flows</NavLink>
            </NavItem>  
          </Nav>
          <NavbarText>Walk the Talk: Financial Blog</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;