import * as ReactBootStrap from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="sm"
      bg="primary"
      variant="dark"
      fixed="bottom"
    >
      <ReactBootStrap.Navbar.Brand href="#home">
        VChakarova
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav.Link  href="https://www.facebook.com/velina.chakurova">
          <FiFacebook/>
          </ReactBootStrap.Nav.Link>
       
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Footer;
