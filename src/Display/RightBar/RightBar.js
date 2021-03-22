import React from "react";
import CurrentGrow from './CurrentGrow';
import GrowOptions from './GrowOptions';
import { Container, Row, Col } from 'react-bootstrap';

const RightBar = (props) => {
    return(
        <Container fluid>
            <Row>
                <Col className="rightbarCol">
                    <Row className="rightbar1">
                        <CurrentGrow 
                            strainSelected={props.strainSelected}
                        />
                    </Row>
                    <Row className="rightbar3">
                        <GrowOptions />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default RightBar;