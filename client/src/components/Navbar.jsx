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
            <Link to='/ModalChart'>
              <button>Net Income Chart</button>
            </Link>
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