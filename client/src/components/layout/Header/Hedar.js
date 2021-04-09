import * as ReactBootStrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from '../../../images/clipart1760363.png'


const Header = () => {
  return (
    
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="sm"
      bg="primary"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand as={NavLink} to="/">
        
        <img src={logo}
           width="30"
           height="30"
           className="d-inline-block align-top"
           alt="logo"
           />{' '}
        Shells
        
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">

          <ReactBootStrap.Nav.Link as={NavLink} to="/login">
           Login
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link as={NavLink} to="/register">
         Register
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown
            title="Dropdown"
            id="collasible-nav-dropdown"
          >
            <ReactBootStrap.NavDropdown.Item href="/contact">
              Action
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">
              Another action
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">
              Something
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">
              Separated link
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link as={NavLink} to="/product/create">
           Sell your Mobile
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
            Dank memes
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Header;
