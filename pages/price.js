import s from  '../styles/global.module.css'
import {Navbar, Nav, NavDropdown, Container, Carousel, Card, CardGroup, Modal, Button  } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image'
import Tort1 from '../public/Tort1.jpg'
import Profile from '../public/Profile.jpg'
import Vk from '../public/vk.png'
import Inst from '../public/inst.jpg'
import Tort from '../public/Tort.jpg'
import {useState, useEffect} from 'react'
import Ter from '../public/ter.jpg'
import TortVali from '../public/ValinTort.JPG'
import ValinTort from '../public/ValinTort1.jpg'
import Svadiba from '../public/Svadiba.jpg'



export default function price() {

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
<NavDropdown.Item > <Link href= '/price'><a className = {s.sa}>Свадебные</a></Link> </NavDropdown.Item>
<NavDropdown.Item > <Link href= '/anniversary'><a className = {s.sa}>Юбилейные</a></Link> </NavDropdown.Item>

</NavDropdown>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
    <div className={s.secon_grid}>
   <div className={s.secon_item}>
<div className={s.secon_carosel1}>
<Carousel>
<Carousel.Item>
  <main className={s.secon_items1}>
<Image src={Tort1} alt="Vercel Logo" layout="fill" />
  </main>
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <main className={s.secon_items1}>
<Image src={Ter} alt="Vercel Logo"  layout="fill" />
  </main>
<Carousel.Caption>
<h3>Торты</h3>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
  </div>
<div className={s.secon_item2}>
<div className = {s.users_grid2}>
  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={Svadiba} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      <button type ='button' onClick={handleShow} className={s.button_css}>Заказать</button>
    </Card.Text>
     </Card.Body>
</Card>
</div>


  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={ValinTort} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      <button type ='button' onClick={handleShow} className={s.button_css}>Заказать</button>
    </Card.Text>
  </Card.Body>
</Card>

</div>

  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={ValinTort} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      <button type ='button' onClick={handleShow} className={s.button_css}>Заказать</button>
    </Card.Text>
  </Card.Body>
</Card>

</div>

  <div className = {s.users_item} >
<Card style={{ width: '18rem' }}>
  <Image src={ValinTort} layout="intrinsic"/>
  <Card.Body>
    <Card.Title>Торты от Вали </Card.Title>
    <Card.Text>
      <button type ='button' onClick={handleShow} className={s.button_css}>Заказать</button>
    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
</div>
 </div>
<div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказ обратный звонок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>

<form>
{(phoneDirty && phoneError) && <div style={{color: "red"}}>{phoneError}</div>}
<input onChange={ e => phoneHandeler(e)} value={phone} onBlur={e => {blueHadler(e)}} type="text" name="phone"
placeholder="напишите номер"/>

{(messageDirty && messageError) && <div style={{color: "red"}}>{messageError}</div>}

<input onChange ={ e => messageHandler(e)} value ={message} onBlur ={ e => {blueHadler(e)}} type="text"
name="message"
placeholder=" напиши пожелания"
/>
{(nameDirty && nameError) && <div style={{color: "red"}}>{nameError}</div>}
<input onChange ={e => nameHandler(e)} value ={name} onBlur={e => {blueHadler(e)}} type="text" name="name"
placeholder="напишите имя"/>
<p></p>
<div> <span className ={s.chex}></span> я соглашаюсь на обработку моих персональных данных</div>

<p></p>
<button disabled={!formValid} > отправить </button>

</form>

</div>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
<div className={s.vk_grid}>

<div className={s.item}>
<div className = {s.vk_items}>
<a href="https://vk.com/valpop87">
<Image src={Vk} layout="intrinsic"/>
</a>
</div>
</div>
<div className={s.item}>
<div className = {s.vk_items1}>
<a href="https://instagram.com/vp.cake?utm_medium=copy_link">
<Image src={Inst} layout="intrinsic"/>
</a>
</div>
</div>
</div>
</div>
</div>


}
