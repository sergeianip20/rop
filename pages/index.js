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
import Head from 'next/head'

export default function Home() {
return <div>
<Head>
</Head>

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

    <div className={s.secon_item}>
<div className={s.secon_carosel1}>
<Carousel>
<Carousel.Item>
  <main className={s.secon_items1}>
<Image src={Tort} alt="Vercel Logo" layout="fill" />
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
 <main className={s.secon_items1}>
<Image src={Profile} alt="Vercel Logo"  layout="fill" />
</main>

<div className ={s.text}>
<div>
Здравствуйте. Меня зовут Валентина. Я тот человек, который сможет воплотить ваш торт мечты! Что такое торт? Конечно- это восторг и удивление детей и взрослых. Этот торт запомнится вам надолго.
     <p></p>
      Он может быть маленьким и уютным, а также грандиозным и невероятным, как Шоу-торт, торт перевернутый вверх ногами, парящий в воздухе торт, торт с подсветкой, раскрывшийся торт, антигравитационный, нарушающий все законы физики.
      <p></p>
       Я постоянно изучаю что-то новое и участвую в различных интересных проектах :
     <ul>
         <li>Золотой призёр "Международного кондитерского конкурса "International Pastry Cup 2019-2020 Самара" в номинации Свадебный шоу торт</li>
    <li>Участник международного обучающего флешмоба-конкурса кондитерского декораторского искусства «Fashion cakes» при поддержке Cake international</li>
    <li>Проходила обучение у лучших специалистов кондитерского дела по следующим направлениям: Шоу торты, свадебные торты, шоколадная флористика и декор.</li>
     </ul>

     </div>
     
    
    

    
    <div>
        <h2>Прайс на продукцию</h2>
        <ul>
            <li>Торты, покрытые кремом —​ от​ 1500 рублей за 1 кг., минимум 2 кг.</li>
            <li>Торты, покрытые пластичным шоколадом или мастикой —​ 1700 рублей за 1 кг., минимум 2-2,5 кг.</li>
            <li>Шоу-торты от 2000 рублей за 1 кг., минимум 2,5 кг.​</li>
            <li>Проекты шоу-тортов расчет индивидуальный.​</li>
            
        </ul>
<ul>
Декор не из крема оплачивается отдельно:
    <li>леденцы, безе —​ от 50 рублей;</li>
    <li>шоколадные цветы​ —​ от 70 рублей</li>
    <li>сахарные фигурки​ —​ от 500 рублей рублей</li>
    <li>пряничные и шоколадные топеры —​ от 200 рублей</li>
    <li>анатомическая лепка из шоколада —​ от 3000 рублей</li>
    <li>свежие ягоды по их себестоимости</li>

</ul>
<ul>
    <li>​Капкейки с кремовой шапочкой и шоколадным декором —​ от 160 рублей за штуку, минимум 6 шт.</li>
    <li>Кейкпопсы (мини-тортик на палочке) от 100 рублей за штуку, минимум 4 шт.</li>
    <li>Доставка моим транспортом от 300 до 2000 рублей по Самаре, по области индивидуальный расчет.</li>
    <li>Аренда выкатного стола​ стеклянного на колесиках под торты —​ 1000 рублей.</li>
    <li>Аренда подставок для тортов —​ от 500 рублей.</li>
</ul>


</div>
</div>

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



}
