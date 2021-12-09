import s from  '../styles/global.module.css'
import {Navbar, Nav, NavDropdown, Container, Carousel, Card, CardGroup } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import Chr from '../public/Chr.jpg'
import Profile from '../public/Profile.jpg'
import Vk from '../public/vk.png'
import Inst from '../public/inst.jpg'
import Tort from '../public/Tort.jpg'
import useState from 'react'



export default function price() {
const [name, setname] = useState('')

    const [phone, setphone] = useState('')
    const [message, setmessage] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [messageDirty, setmessageDirty] = useState(false)
    const [nameError, setnameError] = useState('введите имя')
    const [phoneError, setphoneError] = useState('введите номер')
    const [messageError, setmessageError] = useState('напишите пожелания')
    const [formValid, setFormValid] = useState(false)
    const [chex, setchex] = useState(false)
    const [chexError, setChexError] = useState('я соглашаюсь на обработку моих персональных данных')

return <div>
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
<NavDropdown.Item > <Link href= '/price'><a className = {s.sa}>именные</a></Link> </NavDropdown.Item>
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
<Image src={Chr} alt="Vercel Logo" layout="intrinsic"  />
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<Image src={Chr} alt="Vercel Logo"  layout="intrinsic" />
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
<div className = {s.users_grid}>
  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={Tort} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      
    </Card.Text>
    
    

    
   
  </Card.Body>
</Card>
</div  >

</div>
<div className = {s.users_grid}>
  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={Tort} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      
    </Card.Text>
    
    

    
   
  </Card.Body>
</Card>
</div  >

</div>
     
</div>


}
