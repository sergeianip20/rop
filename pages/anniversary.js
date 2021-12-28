import React ,{useState, useEffect} from 'react'


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
import Ubil3 from '../public/Ubil3.jpg'

export default  function anniversary(){
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
 useEffect( () => {
    if(nameError || phoneError || messageError ) {
    setFormValid(false)
    }else {
    setFormValid(true)
    }
    
    
    [nameError, phoneError, messageError,]})
const phoneHandeler = (e) => {
    setphone(e.target.value)
    const re =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    if(!re.test(String(e.target.value).toLowerCase())){
    setphoneError('введите номер')
    }else {
    setphoneError("")
    }
    }
const nameHandler = (e) => {
    setname(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8 ) {
    setnameError('введите нужное значение ')
    if(!e.target.value){
    setnameError('введите нужное значение ')
    }
    }else {
    setnameError('')
    }
    }
    const messageHandler = (e) => {
    setmessage(e.target.value)
    if(e.target.value.length < 6
    || e.target.value.length > 15 ) {
    setmessageError('введите нужное значение ')
    if(!e.target.value){
    setmessageError('введите нужное значение ')
    }
    }else {
    setmessageError('')
    }
    }
    
   
    
    const blueHadler =(e)=> {
    switch(e.target.name){
    case 'name':
    setNameDirty(true)
    break
    case 'phone':
    setPhoneDirty(true)
    break
    case 'message':
    setmessageDirty(true)
    break  
   
    }  }
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
<div className = {s.users_grid}>
  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={Ubil3} layout="intrinsic"/>
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
  <Image src={Ubil3} layout="intrinsic"/>
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
  <Image src={Ubil3} layout="intrinsic"/>
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
  <Image src={Ubil3} layout="intrinsic"/>
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
