import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // fixed="top"
    <Navbar style={{ backgroundColor: 'gray' }} >
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand style={{color:'white'}} className='fw-bolder'>
          <i class="fa-solid fa-cart-shopping"></i>  E-Commerce 
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header