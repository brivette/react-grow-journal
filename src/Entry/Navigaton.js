import React from 'react';
import { Navbar , Nav, Container, Row, Col } from 'react-bootstrap/';
import { CannIcon } from './Icons';

const Navigation = (props) => {
    return (
<div>
  <Navbar className="shadow" bg="dark" variant="dark">
<Container fluid> 
    <Nav>
        <Row>  
        <Col md={3}>
            <div>
              <Navbar.Brand href="#home">
                <CannIcon />
              </Navbar.Brand>
            </div>
          </Col>
          <Col md={9}>
            <div className="mgAuto">
              <Nav.Link className='navLink' href="#home">New Entry</Nav.Link>
              <Nav.Link className='navLink' href="#features">Review Entries</Nav.Link>
            </div>
          </Col>
          </Row>
    </Nav>
  </Container>
  </Navbar>
</div>
)}

export default Navigation;