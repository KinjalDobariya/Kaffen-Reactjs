
import '../style.css';

// bootstrap file
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//icon file 
import { RxCaretDown } from "react-icons/rx";



function Header() {
  return (
    <div>
      <Navbar className='navs' expand="lg">
        <Container fluid>
          <Navbar.Brand href="home" className='nav_img'>
            <img src={require('../image/asset 0.png')}  alt="" className="img-fluid"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0 align-center" style={{ maxHeight: '100px' }}navbarScroll>
              <Nav.Link href="/">
                HOME <RxCaretDown className='rx_icon'></RxCaretDown> 
                <ul className='sub_nav'>
										<li><a href="#home">Coffee House</a></li>
										<li style={{margin:"0"}}><a href="/Restaurant">Restaurant</a></li>
								</ul>
              </Nav.Link>
              <Nav.Link href="/About" className='about-nav-link'>
                ABOUT  
              </Nav.Link>
              <Nav.Link> 
                MENU <RxCaretDown className='rx_icon'></RxCaretDown>
                <ul className='sub_nav'>
										<li><a href="/Menucoffee">menu Coffee</a></li>
										<li style={{margin:"0"}}><a href="index.html">menu Restaurant</a></li>
								</ul> 
              </Nav.Link>
              <Nav.Link> 
                PAGE <RxCaretDown className='rx_icon'></RxCaretDown>
                <ul className='sub_nav'>
									<li><a href="index.html">Service</a></li>
									<li><a href="index.html">Reservation</a></li>
									<li><a href="index.html">History</a></li>
									<li><a href="index.html">Our Chefs</a></li>
									<li><a href="index.html">Gallery</a></li>
									<li style={{margin:"0"}}><a href="index.html">FAQ</a></li>
								</ul>
              </Nav.Link>
              <Nav.Link href="#"> 
                BLOG <RxCaretDown className='rx_icon'></RxCaretDown>
                <ul className='sub_nav'>
										<li><a href="index.html">blog grid</a></li>
                    <li><a href="index.html">blog standard</a></li>
										<li style={{margin:"0"}}><a href="index.html">blog single</a></li>
								</ul>
              </Nav.Link>
              <Nav.Link href="index.html"> CONTACTS</Nav.Link>
            </Nav>
            <Form className="ms-auto my-2 my-lg-0 align-center" style={{ maxHeight: '100px' }}navbarScroll>
              <Button variant="outline-success"><span>Book a table</span></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}



export default Header;