import Link from 'next/link'
import s from './navbar.module.css'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
return   <div>
     <div className={s.navbar_BG}>
<Navbar collapseOnSelect expand="lg"  variant="dark">
   
  <Container>
  <Navbar.Brand href="#home">VPcake</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="Торты" id="collasible-nav-dropdown">
    <NavDropdown.Item > <Link href= '/secon'><a className = {s.sa}>детские</a></Link> </NavDropdown.Item>
    <NavDropdown.Item > <Link href= '/'><a className = {s.sa}>заказ</a></Link> </NavDropdown.Item>
        <NavDropdown.Item >Корпоративные</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item > <Link href= '/price'><a className = {s.sa}>именные</a></Link> </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Прайс</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
 
</Navbar>
</div>

    </div>

  


}

export default NavBar