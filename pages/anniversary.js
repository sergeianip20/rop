import s from  '../styles/global.module.css'
import {Navbar, Nav, NavDropdown, Container, Carousel, Card, CardGroup } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import Tort from '../public/Tort1.jpg'
import Profile from '../public/Profile.jpg'
import Vk from '../public/vk.png'
import Inst from '../public/inst.jpg'
import Ter from '../public/ter.jpg'
import Ubil from '../public/Ubil.jpg'
import Ubil2 from '../public/Ubil2.jpg'
import Ubil4 from '../public/Ubil4.jpg'
import Book from '../public/book.jpg'



export default  function anniversary(){
return<div>

<div className ={s.body}>
<Navbar collapseOnSelect expand="lg"  variant="dark">
   <Container>
<Navbar.Brand href="#home">VPcake</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
<NavDropdown title="Торты" id="collasible-nav-dropdown">
<NavDropdown.Item > <Link href= '/secon'><a className = {s.sa}>детские</a></Link> </NavDropdown.Item>
<NavDropdown.Item > <Link href= '/'><a className = {s.sa}>заказ</a></Link> </NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item > <Link href= '/price'><a className = {s.sa}>Свадебные</a></Link> </NavDropdown.Item>

<NavDropdown.Item > <Link href= '/anniversary'><a className = {s.sa}>Юбилейные</a></Link> </NavDropdown.Item>

</NavDropdown>
<Nav.Link href="#features">Прайс</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
<div>
<Carousel>
<Carousel.Item>
<Image src={Ubil2} alt="Vercel Logo" layout="intrinsic"  />
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Image src={Book} alt="Vercel Logo"  layout="intrinsic" />
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>

}
