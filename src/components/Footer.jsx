import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    // <footer className="bg-danger py-4 mt-5">
    <footer style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', marginTop: "100px" }}>
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
          
          <a href="#men">Men</a>
          
        </div>
      </Col>
  
      {/* Third Column: Contact Information */}
      <Col md={3}>
        <h5>Contact Us</h5>
        <div className="d-flex flex-column">
          <p><i className="fa-solid fa-phone"></i>: (123) 456-7890</p>
          <p><i className="fa-solid fa-envelope"></i>: support@mystore.com</p>
        </div>
      </Col>

      {/* Fourth Column: Social Media Links */}
      <Col md={3}>
        <h5>Follow Us</h5>
        <div className="d-flex">
          <a href=""><i className="fa-brands fa-facebook" style={{ fontSize: '30px' }}></i></a>
          <a href=""><i className="fa-brands fa-instagram" style={{ fontSize: '30px', paddingLeft: '10px' }}></i></a>
          <a href=""><i className="fa-brands fa-twitter" style={{ fontSize: '30px', paddingLeft: '10px' }}></i></a>
          <a href=""><i className="fa-brands fa-youtube" style={{ fontSize: '30px', paddingLeft: '10px' }}></i></a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

  )
}

export default Footer