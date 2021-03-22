import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

const StrainSelector = (props) => {
return (
<div className="strainSelect">
    <Container fluid>
        <Row className="p-3">
            <Col md={4}>
            <h2>Choose grow:</h2> 
            </Col>
            <Col md={5}>
                <select id="strain"
                        value={props.strainSelected} 
                        onChange={e => props.setStrain(e.target.value)}
                        className="strain-select">
                    <option disabled selected value=''> - select an option - </option>
                    <option value="Blueberry Auto">Blueberry</option>
                    <option value="Zkittlez Auto">Zkittlez</option>
                    <option value="Gelat.OG Auto">Gelat.OG</option>
                    <option value="Sweet Zombie">Sweet Zombie</option>
                    <option value="White Widow">White Widow</option>
                </select>
            </Col>
        </Row>
    </Container>
</div>
)
}

export default StrainSelector;