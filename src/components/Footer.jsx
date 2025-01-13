import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-danger py-4 mt-5">
      <Container>
        <Row>
          {/* First Column: Logo and Description */}
          <Col md={3}>
            <a href="#" className="navbar-brand">MyStore</a>
            <p>Your one-stop online shopping destination for everything you need. Explore our wide range of products for Kids, Men, and Women with fast and easy shopping experience.</p>
          </Col>

          {/* Second Column: Links for Kids, Men, Women */}
          <Col md={3}>
            <h5>Shop by Category</h5>
            <div className="d-flex flex-column">
              <a href="#kids">Kids</a>
              <a href="#men">Men</a>
              <a href="#women">Women</a>
            </div>
          </Col>
    
          {/* Third Column: Contact Information */}
          <Col md={3}>
            <h5>Contact Us</h5>
            <div className="d-flex flex-column">
              <p><i class="fa-solid fa-phone"></i>: (123) 456-7890</p>
              <p><i class="fa-solid fa-envelope"></i>: support@mystore.com</p>
            </div>
          </Col>

          {/* Fourth Column: Social Media Links */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              
              <a href=""><i class="fa-brands fa-facebook" style={{ fontSize: '30px' }}></i></a>
              <a href=""><i class="fa-brands fa-instagram" style={{ fontSize: '30px',paddingLeft: '10px'  }}></i></a>
              <a href=""><i class="fa-brands fa-twitter" style={{ fontSize: '30px',paddingLeft: '10px' }}></i></a>
              <a href=""><i class="fa-brands fa-youtube" style={{ fontSize: '30px',paddingLeft: '10px' }}></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer