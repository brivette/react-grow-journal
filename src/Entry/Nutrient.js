import React, {useState} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Nutrient = (props) => {


return (
<div>
    <Row className="d-flex align-items-center nutrient">
        <Col lg={2} md={3} sm={4} xs={8}>
            <h4>{props.nuteName}</h4>
        </Col>
        <Col lg={3} md={3} sm={6} xs={4}>        
            <input 
                type="text" 
                className="form-control" 
                placeholder={props.nuteMeasurement} 
                onChange={props.setMegacrop}
                name="megacrop"
                />
        
                <span>{props.megQuan}</span>
        </Col>
        <Col>
            <span>{props.nuteMeasureAbv}</span>
        </Col>
    </Row>
</div>
)
};

export default Nutrient;