import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png'
import Button from 'react-bootstrap/Button';
import  './style.css'
import { Link } from 'react-router-dom';


const Menu=()=>{
    return(
      <div className='boxMenu'>
      <Navbar expand="lg" className=" bg-dark  p-3">
      <Container>
        
        <Navbar.Toggle  className='bg-light' aria-controls="basic-navbar-nav" />
        <img src={logo} className='ms-auto me-3' />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto me-4">
            <Nav.Link className='a text-light'as={Link} to="/">صفحه اصلی</Nav.Link>
            <Nav.Link className='a text-light' as={Link} to="/">فیلم های سینمایی</Nav.Link>
            <Nav.Link className='a text-light' as={Link} to="/">سریال ها</Nav.Link>
            <Nav.Link className='a text-light' as={Link} to="/">فیلم های برتر</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className='mx-3' variant="light">ثبت نام</Button>
        <Button variant="success" as={Link} to="/logIn">خرید اشتراک</Button>
      </Container>
    </Navbar>
    <main>
        <Outlet />
    </main>

    </div>
    )
}

export default Menu