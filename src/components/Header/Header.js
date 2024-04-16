import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="sm">
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <h1 className='text-center'>Zubair's Blog !!</h1>
            </Link>
          </Navbar.Brand>

          <Button type='button' className='btn btn-dark' style={{ marginLeft: 'auto' }}>
            <Link to="/add-blog" style={{ textDecoration: 'none' }}>
              <h1 >Add</h1>
            </Link>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
