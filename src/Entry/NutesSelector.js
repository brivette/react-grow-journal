import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Nutrient from './Nutrient';



const NutesSelector = (props) => {
    return (
      <>
        <Modal dialogClassName="modal-90w" show={props.show} onHide={props.handleClose}>
            <Container fluid className="nute-box">
                <Col>
                <h2>Nutrient Selector</h2>
                  <div className="standard-nutes">
                    <h3>Standard Nutrients</h3>
    
                    <Nutrient 
                      setMegacrop={props.setMegacrop}
                      nuteName="Megacrop"
                      measurement="grams"
                      onChangeHandler={props.handleChange}
                      megQuan={props.megQuan}
                    />
                    
                  </div>
                  <div className="supplemental-nutes">
                    <h3>Supplemental Nutrients</h3>
                    
                   
                    
                  </div>
            <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Save
          </Button>
        </Modal.Footer>
        </Col>
        </Container>
        </Modal>
      </>
    );
  }

export default NutesSelector;