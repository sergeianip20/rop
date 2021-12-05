import s from  '../styles/global.module.css'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default function Home() {
return <div className ={s.body}>

hello
<Navbar collapseOnSelect expand="lg"  variant="dark">
   <Container>
<Navbar.Brand href="#home">VPcake</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
<NavDropdown title="Торты" id="collasible-nav-dropdown">
</NavDropdown>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

</div>



}
