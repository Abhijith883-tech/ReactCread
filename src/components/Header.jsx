import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // fixed="top"
    // <Navbar expand="lg" fixed="top">
    //   <Container>
    //     <Link to="/" style={{ textDecoration: 'none' }}>
    //       <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>
    //       <i className="fa-solid fa-cart-shopping" style={{ fontSize: '24px', marginRight: '12px', color: 'blue' }}></i> <span style={{color:'blue'}}>E-Commerce</span>

    //       </Navbar.Brand>
    //     </Link>
    //   </Container>
    // </Navbar>

    <Navbar expand="lg" fixed="top" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }}>
            <i className="fa-solid fa-cart-shopping" style={{ fontSize: '24px', marginRight: '12px', color: 'blue' }}></i>
            <span style={{ color: 'blue' }}>E-Commerce</span>
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>


  )
}

export default Header