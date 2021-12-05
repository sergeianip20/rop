import s from  '../styles/global.module.css'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
return <div className ={s.body}>

hello
<Navbar collapseOnSelect expand="lg"  variant="dark">
   <Container>
<Navbar.Brand href="#home">VPcake</Navbar.Brand>
 </Container>
</Navbar>

</div>



}
