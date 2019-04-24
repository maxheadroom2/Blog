import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About'
import NewEntry from './NewEntry'
import Bios from './Bios'
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <React.Fragment>  
          <Navbar bg="dark" variant='dark' expand="lg" className='w-sh'>
            <Navbar.Brand><h2>Space Blog</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">              
                <Link to='/home' className='nav-link mx-2'> 
                  <Button variant='outline-light' className='block'>Home</Button>
                </Link>
                <Link to='/about' className='nav-link mx-2'>
                  <Button variant='outline-light' className='block'>About</Button>
                </Link>
                <Link to='/newentry' className='nav-link mx-2'>
                  <Button variant='outline-light' className='block'>New Entry</Button>
                </Link>
                <Link to='/bios' className='nav-link mx-2'>
                  <Button variant='outline-light' className='block'>Biographies</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
      <Route path='/home' component={ Home }/>
      <Route path='/about' component={ About }/>
      <Route path='/newentry' component={ NewEntry }/>
      <Route path='/bios' component={ Bios } />
    </React.Fragment>
  );
}

export default App;
